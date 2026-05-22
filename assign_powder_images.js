const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Map each blog title to its specific image in blog_related/
const imageAssignments = [
  {
    title: "Powder Containment Booths Manufacturers in Chennai & India",
    featuredImage: "/uploads/images/blog_related/powder-containment-booths-blog.jpg"
  },
  {
    title: "Powder Sampling Booths Manufacturers in Chennai and India",
    featuredImage: "/uploads/images/blog_related/powder-sampling-booths.jpg"
  },
  {
    title: "Powder Dispensing Booths Manufacturers in Chennai and India",
    featuredImage: "/uploads/images/blog_related/powder-dispensing-booths.jpg"
  }
];

async function assignImages() {
  try {
    await mongoose.connect(DB_URI);
    console.log('Connected to MongoDB');

    let updated = 0;
    for (const item of imageAssignments) {
      const blog = await Blog.findOne({ title: item.title });
      if (blog) {
        blog.featuredImage = item.featuredImage;
        blog.markModified('featuredImage');
        await blog.save();
        console.log(`✅ Image set for: "${item.title}"`);
        console.log(`   → ${item.featuredImage}`);
        updated++;
      } else {
        console.log(`❌ Blog NOT FOUND: "${item.title}"`);
      }
    }

    console.log(`\nDone. Updated ${updated}/${imageAssignments.length} blogs.`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

assignImages();
