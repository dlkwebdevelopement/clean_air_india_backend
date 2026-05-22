const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function finalCheck() {
  try {
    await mongoose.connect(DB_URI);
    console.log('Connected to MongoDB\n');
    console.log('='.repeat(60));
    console.log('FINAL VERIFICATION — POWDER BOOTH BLOGS');
    console.log('='.repeat(60));

    const powderTitles = [
      "Powder Containment Booths Manufacturers in Chennai & India",
      "Powder Sampling Booths Manufacturers in Chennai and India",
      "Powder Dispensing Booths Manufacturers in Chennai and India"
    ];

    for (const title of powderTitles) {
      const blog = await Blog.findOne({ title });
      if (!blog) {
        console.log(`\n❌ NOT FOUND: "${title}"`);
        continue;
      }
      console.log(`\n✅ TITLE   : ${blog.title}`);
      console.log(`   SLUG    : ${blog.slug}`);
      console.log(`   IMAGE   : ${blog.featuredImage}`);
      console.log(`   EXCERPT : ${blog.excerpt.substring(0, 80)}...`);
      console.log(`   CONTENT : ${blog.content.length} chars`);
      console.log(`   SNIPPET : ${blog.content.replace(/<[^>]*>/g,'').substring(0, 120)}...`);
    }

    // Check no two have the same content
    console.log('\n' + '='.repeat(60));
    const blogs = await Blog.find({ title: { $regex: /Powder/, $options: 'i' } });
    const contentSet = new Set(blogs.map(b => b.content.trim()));
    if (contentSet.size === blogs.length) {
      console.log(`✅ UNIQUE CONTENT CHECK: All ${blogs.length} powder blogs have unique content.`);
    } else {
      console.log(`❌ DUPLICATE CONTENT DETECTED among powder blogs!`);
    }
    console.log('='.repeat(60));

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

finalCheck();
