const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const uploadsDir = path.join(__dirname, 'uploads');
const destDir = path.join(uploadsDir, 'images', 'blog_related');

// Ensure destination folder exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created folder:', destDir);
} else {
  console.log('Folder already exists:', destDir);
}

// Images mapping (Source filename in uploads/ to destination filename in uploads/images/blog_related/)
const fileMapping = {
  '1758865764661-laminar9.jpg': 'laminar.jpg',
  '1758865826380-fume4.jpg': 'fume-hood.jpg',
  '1758866991696-box2.jpg': 'pass-box.jpg',
  '1758894544554-Powder2.jpg': 'powder-booth.jpg',
  '1758861739132-modular-room5.jpg': 'cleanroom.jpg',
  '1758866828049-Air1.jpeg': 'air-shower.jpg',
  '1758866404002-Ste1.jpg': 'sterile-garment.jpg'
};

// Copy the files
Object.entries(fileMapping).forEach(([srcName, destName]) => {
  const srcPath = path.join(uploadsDir, srcName);
  const destPath = path.join(destDir, destName);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Successfully copied: ${srcName} -> ${destName}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});

// Connect to MongoDB and update blog featuredImages
async function updateBlogImages() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database successfully!');

    const blogs = await Blog.find({});
    console.log(`Found ${blogs.length} blogs to check/update.`);

    let updatedCount = 0;

    for (const blog of blogs) {
      const title = blog.title.toLowerCase();
      let matchedImage = null;

      if (title.includes('laminar') || title.includes('biosafety')) {
        matchedImage = '/uploads/images/blog_related/laminar.jpg';
      } else if (title.includes('fume')) {
        matchedImage = '/uploads/images/blog_related/fume-hood.jpg';
      } else if (title.includes('powder') || title.includes('downflow') || title.includes('weighing') || title.includes('reverse flow') || title.includes('booth')) {
        matchedImage = '/uploads/images/blog_related/powder-booth.jpg';
      } else if (title.includes('pass box') || title.includes('pass boxes')) {
        matchedImage = '/uploads/images/blog_related/pass-box.jpg';
      } else if (title.includes('air shower')) {
        matchedImage = '/uploads/images/blog_related/air-shower.jpg';
      } else if (title.includes('sterile garment') || title.includes('garment')) {
        matchedImage = '/uploads/images/blog_related/sterile-garment.jpg';
      } else if (title.includes('cleanroom') || title.includes('cleanrooms') || title.includes('fan filter') || title.includes('ffu')) {
        matchedImage = '/uploads/images/blog_related/cleanroom.jpg';
      }

      if (matchedImage) {
        blog.featuredImage = matchedImage;
        await blog.save();
        console.log(`Updated blog: "${blog.title}" -> ${matchedImage}`);
        updatedCount++;
      } else {
        console.log(`No specific product match for blog: "${blog.title}". Left as: ${blog.featuredImage}`);
      }
    }

    console.log(`Successfully updated ${updatedCount} blogs with real product images.`);
  } catch (error) {
    console.error('Error during database update:', error);
  } finally {
    mongoose.connection.close();
  }
}

updateBlogImages();
