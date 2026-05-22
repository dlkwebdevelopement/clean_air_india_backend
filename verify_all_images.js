const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function verify() {
  try {
    await mongoose.connect(DB_URI);
    console.log('Connected to MongoDB\n');

    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    console.log(`Total blogs: ${blogs.length}\n`);

    let missingImage = 0;
    blogs.forEach((b, i) => {
      const hasImg = b.featuredImage && b.featuredImage.trim() !== '';
      if (!hasImg) missingImage++;
      console.log(`[${i + 1}] "${b.title}"`);
      console.log(`    Image: ${hasImg ? b.featuredImage : '❌ MISSING'}`);
    });

    console.log(`\n--- Summary ---`);
    console.log(`Total: ${blogs.length} | With image: ${blogs.length - missingImage} | Missing: ${missingImage}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

verify();
