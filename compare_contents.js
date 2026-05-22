const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function compare() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    const blogs = await Blog.find({});
    
    // Group blogs by content hash/length or value
    const groups = {};
    blogs.forEach(b => {
      const normalizedContent = b.content ? b.content.trim() : '';
      if (!groups[normalizedContent]) {
        groups[normalizedContent] = [];
      }
      groups[normalizedContent].push(b);
    });

    console.log(`\n--- Duplicate Content Report ---`);
    let duplicateCount = 0;
    for (const [content, list] of Object.entries(groups)) {
      if (list.length > 1) {
        duplicateCount++;
        console.log(`\nGroup ${duplicateCount} (Found ${list.length} blogs with identical content):`);
        list.forEach(b => {
          console.log(`- ID: ${b._id}, Title: "${b.title}", Slug: "${b.slug}"`);
        });
        console.log(`Content length: ${content.length} characters.`);
        console.log(`Snippet: ${content.substring(0, 150)}...`);
      }
    }

    if (duplicateCount === 0) {
      console.log('No blogs have identical content strings in MongoDB.');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

compare();
