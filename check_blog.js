const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const Category = require('./models/Category');
const User = require('./models/User');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function checkBlog() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    const blogs = await Blog.find({ status: 'published' })
      .populate('category')
      .populate('createdBy')
      .sort({ createdAt: -1 });
      
    console.log('Total published blogs:', blogs.length);
    blogs.forEach((b, i) => {
      console.log(`[${i+1}] ${b.title}`);
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

checkBlog();
