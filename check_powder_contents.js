const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function check() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    const titles = [
      "Powder Containment Booths Manufacturers in Chennai & India",
      "Powder Sampling Booths Manufacturers in Chennai and India",
      "Powder Dispensing Booths Manufacturers in Chennai and India"
    ];

    for (const t of titles) {
      const b = await Blog.findOne({ title: t });
      if (b) {
        console.log(`\n========================================`);
        console.log(`Title: ${b.title}`);
        console.log(`Content Snippet (first 400 chars):\n${b.content.substring(0, 400)}`);
        console.log(`Content Length: ${b.content.length} chars`);
      } else {
        console.log(`\nBlog not found: ${t}`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

check();
