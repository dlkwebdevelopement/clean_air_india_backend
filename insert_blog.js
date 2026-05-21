const mongoose = require('mongoose');
const User = require('./models/User');
const Category = require('./models/Category');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function insertBlog() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB');

    const user = await User.findOne();
    if (!user) {
      console.log('No user found to set as author.');
      return;
    }

    let category = await Category.findOne({ name: 'Product' });
    if (!category) {
      category = await Category.findOne(); // grab any category if 'Product' doesn't exist
      if (!category) {
          category = new Category({ name: 'Product', slug: 'product', description: 'Product category' });
          await category.save();
      }
    }

    const title = 'Laminar Airflow Systems for Cleanroom Solutions India';
    const excerpt = 'Advanced Laminar Airflow Clean Benches and Work Stations by Clean Air Systems. Trusted manufacturer in Chennai and India for contamination-free cleanroom airflow solutions used in labs, pharma, and research industries with reliable performance and quality standards.';
    
    const content = `
<p>Clean Air Systems is a trusted manufacturer and supplier of advanced Laminar Airflow solutions designed for contamination-free environments in laboratories, pharmaceutical industries, research centers, and healthcare facilities. Our systems are engineered with precision airflow technology to maintain sterile working conditions and ensure maximum protection against airborne contamination.</p>
<p>We specialize in high-quality Laminar Airflow Clean Benches, Laminar Airflow Work Stations, and modular cleanroom airflow systems that are widely used across Laminar Airflow Chennai and Laminar Airflow India markets.</p>

<h2>What is Laminar Airflow?</h2>
<p>Laminar Airflow is a controlled air movement system that delivers HEPA-filtered air in a uniform, unidirectional flow. This helps maintain a clean and sterile environment by removing dust particles, microbes, and airborne contaminants.</p>
<p>The Laminar Airflow Clean Benches are specially designed for laboratory applications where sterility is extremely important. These systems are widely used in microbiology labs, pharmaceutical research, chemical testing, and biotechnology environments.</p>
<p>By maintaining constant airflow direction, Laminar Airflow systems ensure that sensitive materials and experiments are protected from contamination.</p>

<h2>Laminar Airflow Clean Benches and Work Stations</h2>
<p>At Clean Air Systems, we manufacture advanced Laminar Airflow Work Stations that provide a safe and controlled environment for critical operations. These workstations are built using high-quality stainless steel, HEPA filtration systems, and energy-efficient airflow motors.</p>
<p>Our Laminar Airflow Clean Benches are widely used in research laboratories and pharmaceutical industries for sample preparation and testing processes. They ensure that airflow remains consistent and contamination-free throughout the working zone.</p>
<p>These systems are designed to improve accuracy, safety, and efficiency in controlled environments.</p>

<h2>Growing Demand in Laminar Airflow Chennai and Laminar Airflow India</h2>
<p>The demand for Laminar Airflow Chennai solutions has increased significantly due to rapid growth in pharmaceutical companies, hospitals, and biotechnology research centers in the region.</p>
<p>Across Laminar Airflow India, industries are focusing on maintaining strict cleanliness standards in production and research environments. Clean Air Systems plays a major role in supplying reliable cleanroom airflow systems that meet international quality standards.</p>
<p>Our systems are widely trusted for their durability, efficiency, and contamination control performance.</p>

<h2>Laminar Airflow Price and Cost Factors</h2>
<p>The Laminar Airflow Price depends on several important factors such as:</p>
<ul>
<li>Size and design of the system</li>
<li>Type of filtration (HEPA or ULPA)</li>
<li>Airflow capacity and performance level</li>
<li>Material used in construction</li>
<li>Application requirements</li>
</ul>
<p>We ensure that our pricing remains competitive while maintaining high-quality standards. Whether it is a small laboratory setup or a large industrial facility, we provide cost-effective solutions suitable for different budgets.</p>

<h2>Laminar Airflow Manufacturers in Chennai and India</h2>
<p>Clean Air Systems is recognized as one of the reliable Laminar Airflow Manufacturers in Chennai, delivering advanced cleanroom solutions with strict quality control and engineering precision.</p>
<p>We are also one of the trusted Laminar Airflow Manufacturers in India, supplying high-performance airflow systems to pharmaceutical industries, biotechnology labs, research institutions, and healthcare facilities.</p>
<p>Our manufacturing process focuses on durability, safety, and long-term performance, ensuring every product meets industry standards.</p>

<h2>Applications of Laminar Airflow Systems</h2>
<p>Laminar Airflow systems are widely used in various industries such as:</p>
<ul>
<li>Pharmaceutical manufacturing units</li>
<li>Biotechnology research laboratories</li>
<li>Microbiology and chemical testing labs</li>
<li>Hospitals and healthcare environments</li>
<li>Electronics and semiconductor industries</li>
<li>Food testing and processing units</li>
</ul>
<p>These systems help maintain contamination-free environments, ensuring product safety and research accuracy.</p>

<h2>Key Features of Laminar Airflow Systems</h2>
<p>Our Laminar Airflow solutions come with advanced features including:</p>
<ul>
<li>HEPA-filtered unidirectional airflow system</li>
<li>Stainless steel corrosion-resistant design</li>
<li>Low noise and energy-efficient operation</li>
<li>Uniform airflow distribution for maximum protection</li>
<li>Easy maintenance and cleaning</li>
<li>Customizable workstation designs</li>
<li>High durability and long service life</li>
</ul>
<p>These features make our systems highly reliable for critical cleanroom applications.</p>

<h2>Why Choose Clean Air Systems?</h2>
<p>Clean Air Systems is committed to delivering high-quality Laminar Airflow solutions that meet modern industrial standards. Our products are designed to ensure safety, precision, and long-term reliability.</p>
<p>We focus on providing advanced Laminar Airflow Clean Benches and Laminar Airflow Work Stations that support contamination-free operations across various industries.</p>
<p>With strong presence in Laminar Airflow Chennai and Laminar Airflow India, we continue to serve clients with innovative cleanroom technology and dependable engineering support.</p>
    `;

    let blog = await Blog.findOne({ title });
    if (blog) {
      blog.content = content;
      blog.excerpt = excerpt;
      blog.author = 'Cleanair India';
      blog.category = category._id;
      blog.status = 'published';
      blog.featuredImage = 'https://api.cleanairindia.com/uploads/images/blog/blog.png';
      await blog.save();
      console.log('Blog updated successfully!');
    } else {
      blog = new Blog({
        title,
        content,
        excerpt,
        author: 'Cleanair India',
        category: category._id,
        createdBy: user._id,
        status: 'published',
        featuredImage: 'https://api.cleanairindia.com/uploads/images/blog/blog.png',
        publishedAt: new Date(),
      });
      await blog.save();
      console.log('Blog inserted successfully!');
    }
    console.log('Blog inserted successfully!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertBlog();
