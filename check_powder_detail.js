const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function check() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    const blogs = await Blog.find({
      title: { $regex: /Powder/, $options: 'i' }
    });

    blogs.forEach(b => {
      console.log(`\n========================================`);
      console.log(`Title: ${b.title}`);
      console.log(`Content:\n${b.content}`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

check();
