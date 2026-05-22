const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function checkAll() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    const blogs = await Blog.find({});
    console.log(`Found a total of ${blogs.length} documents in Blog collection.`);
    
    blogs.forEach((b, i) => {
      console.log(`\n--------------------------------------------------`);
      console.log(`[${i + 1}] ID: ${b._id}`);
      console.log(`Title: "${b.title}"`);
      console.log(`Slug: "${b.slug}"`);
      console.log(`Status: "${b.status}"`);
      console.log(`Content length: ${b.content ? b.content.length : 0}`);
      console.log(`Content Snippet: ${b.content ? b.content.substring(0, 150).replace(/\r?\n/g, ' ') : ''}...`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

checkAll();
