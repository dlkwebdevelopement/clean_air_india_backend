const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function find() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    const blogs = await Blog.find({});
    
    // Check if any blog has content that mentions "Powder Containment Booths Manufacturers in Chennai"
    console.log('\n--- Blogs mentioning Powder Containment ---');
    blogs.forEach(b => {
      if (b.content && b.content.includes("Powder Containment Booths")) {
        console.log(`- Title: "${b.title}"`);
        console.log(`  Content length: ${b.content.length}`);
        console.log(`  Excerpt: "${b.excerpt}"`);
      }
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

find();
