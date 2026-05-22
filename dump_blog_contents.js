const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function dump() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    const blogs = await Blog.find({});
    console.log(`Total blogs: ${blogs.length}`);
    
    blogs.forEach((b, i) => {
      console.log(`\n========================================`);
      console.log(`[${i + 1}] Title: ${b.title}`);
      console.log(`Featured Image: ${b.featuredImage}`);
      console.log(`Content Length: ${b.content ? b.content.length : 0} chars`);
      console.log(`Snippet: ${b.content ? b.content.substring(0, 200).replace(/\n/g, ' ') : ''}...`);
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

dump();
