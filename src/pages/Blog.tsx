import Navigation from '@/pages/Navigation';
import Footer from '@/pages/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Reproductive Health: A Comprehensive Guide",
      excerpt: "Learn about the latest advances in reproductive health and what they mean for your wellness journey.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      category: "Reproductive Health",
      readTime: "5 min read",
      image: "https://www.yashodahealthcare.com/blogs/wp-content/uploads/2021/07/Gynecology-Doctors.png"
    },
    {
      id: 2,
      title: "Prenatal Care: What to Expect During Your Pregnancy",
      excerpt: "A complete guide to prenatal care, from your first appointment to delivery preparation.",
      author: "Lisa Thompson, CNM",
      date: "2024-01-10",
      category: "Pregnancy",
      readTime: "7 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDTq5QsLCh1vwqvyb9sWzQg9tefm3XW31ig&s"
    },
    {
      id: 3,
      title: "Women's Health After 40: Key Considerations",
      excerpt: "Important health screenings and lifestyle changes to consider as you enter your 40s and beyond.",
      author: "Dr. Maria Rodriguez",
      date: "2024-01-05",
      category: "Women's Health",
      readTime: "6 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3hOKqwid7PVHHGTU_v6Bjx3D7MwooAOJl3Z13fAiOLmY8neyKXT1AADOkttostbmUmg&usqp=CAU"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-accent-teal">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="section-title text-primary">
                Women's Health Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert insights, health tips, and the latest updates in women's healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="relative">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: '#217576'}}>
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;