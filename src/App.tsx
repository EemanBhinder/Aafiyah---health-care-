import { motion } from 'motion/react';
import { Heart, MessageCircle, Calendar, Shield, Users, Brain, Activity, Compass, Check, Star, Book, Sparkles, Target, Clock, FileText, Upload, Mic, Zap, TrendingUp } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-aafiyah-charcoal">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div className="space-y-4" variants={fadeInUp}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-aafiyah-sage rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-aafiyah-charcoal">Aafiyah</h1>
                </div>
                <h2 className="text-xl text-aafiyah-rose">Your Health, Your Privacy, Your Partner.</h2>
              </motion.div>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                A culturally sensitive, empathetic, and private health ecosystem for women facing PCOS, endometriosis, and other conditions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <Button className="bg-aafiyah-sage hover:bg-aafiyah-sage/90 text-white px-8 py-3 rounded-xl">
                  Get Started
                </Button>
                <Button variant="outline" className="border-aafiyah-rose text-aafiyah-rose hover:bg-aafiyah-rose hover:text-white px-8 py-3 rounded-xl">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-96 h-100 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-aafiyah-sage to-aafiyah-rose rounded-3xl shadow-2xl transform rotate-3"></div>
                <div className="relative w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-100">
                  <img
                    src="/Aafiyah---health-care-/images/hero.png"
                    alt="Aafiyah mobile app mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-aafiyah-charcoal mb-4">Comprehensive Health Support</h2>
            <p className="text-lg text-gray-600">Everything you need for your wellness journey in one place</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: MessageCircle,
                title: "AI Health Companion",
                description: "Talk to Haya - your personal AI assistant trained on women's health",
                color: "bg-aafiyah-sage"
              },
              {
                icon: Calendar,
                title: "Symptom Tracker",
                description: "Track symptoms with an intuitive calendar view and detailed insights",
                color: "bg-aafiyah-rose"
              },
              {
                icon: Shield,
                title: "Secure Medical Scan Analysis",
                description: "Upload and analyze medical documents with complete privacy",
                color: "bg-aafiyah-sage"
              },
              {
                icon: Compass,
                title: "Personalized Wellness Hub",
                description: "Diet, exercise, and spiritual guidance tailored to your needs",
                color: "bg-aafiyah-rose"
              },
              {
                icon: Users,
                title: "Private Community",
                description: "Connect with others and access professional consultations",
                color: "bg-aafiyah-sage"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-aafiyah-charcoal mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Core Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-aafiyah-charcoal mb-4">Featured Wellness Solutions</h2>
            <p className="text-lg text-gray-600">Culturally sensitive healing and personalized care tailored just for you</p>
          </motion.div>

          {/* Surah e Rahman Therapy Feature */}
          <motion.div 
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-6" variants={fadeInUp}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-aafiyah-sage to-aafiyah-rose rounded-2xl flex items-center justify-center">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-aafiyah-charcoal">Surah e Rahman Therapy</h3>
                    <p className="text-aafiyah-rose">Spiritual healing rooted in Islamic tradition</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experience the healing power of Surah e Rahman, known as the "Beauty of the Quran." 
                  Our guided spiritual therapy sessions combine the recitation of this blessed chapter 
                  with mindfulness techniques specifically designed for women's health challenges.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Heart,
                      title: "Emotional Healing",
                      description: "Find peace and comfort through guided recitation and reflection"
                    },
                    {
                      icon: Sparkles,
                      title: "Stress Relief",
                      description: "Reduce anxiety and stress through spiritual mindfulness practices"
                    },
                    {
                      icon: Shield,
                      title: "Cultural Sensitivity",
                      description: "Healing methods that respect and honor your Islamic faith"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-aafiyah-sage/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <benefit.icon className="w-5 h-5 text-aafiyah-sage" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-aafiyah-charcoal mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-aafiyah-sage hover:bg-aafiyah-sage/90 text-white px-8 py-3 rounded-xl">
                  Start Spiritual Healing
                </Button>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1711928506109-14128b34f558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwcHJheWVyJTIwbWVkaXRhdGlvbiUyMHdvbWFufGVufDF8fHx8MTc1NjY1NzkzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Woman in peaceful prayer and meditation"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aafiyah-sage/20 to-transparent"></div>
                </div>
                
                {/* Floating Quote Card */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-gray-600 italic mb-2">
                    "So which of the favors of your Lord would you deny?"
                  </p>
                  <p className="text-xs text-aafiyah-sage font-medium">- Surah Ar-Rahman</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Personalized Plans Feature */}
          <motion.div 
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative order-2 lg:order-1"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1617170007444-368999506742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjBoZWFsdGglMjBwbGFuJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1NjY1NzkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Personalized health plan and nutrition"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aafiyah-rose/20 to-transparent"></div>
                </div>
                
                {/* Floating Stats Cards */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aafiyah-rose rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-600">Personalized</p>
                    <p className="font-bold text-aafiyah-charcoal">100%</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aafiyah-sage rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-600">Updated</p>
                    <p className="font-bold text-aafiyah-charcoal">Daily</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div className="space-y-6 order-1 lg:order-2" variants={fadeInUp}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-aafiyah-rose to-aafiyah-sage rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-aafiyah-charcoal">Personalized Wellness Plans</h3>
                    <p className="text-aafiyah-rose">Tailored specifically to your unique needs</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Get wellness plans that adapt to your lifestyle, health conditions, cultural preferences, 
                  and personal goals. Our AI-driven system creates comprehensive plans covering nutrition, 
                  exercise, spiritual practices, and medical management.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Activity,
                      title: "Halal Nutrition",
                      description: "Meal plans that respect Islamic dietary laws and support your health goals"
                    },
                    {
                      icon: Heart,
                      title: "Gentle Exercise",
                      description: "Movement routines designed for women with PCOS and endometriosis"
                    },
                    {
                      icon: Book,
                      title: "Spiritual Wellness",
                      description: "Daily Islamic practices integrated into your health routine"
                    },
                    {
                      icon: Calendar,
                      title: "Adaptive Scheduling",
                      description: "Plans that adjust to your cycle, symptoms, and daily life"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-aafiyah-rose/20 rounded-xl flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-aafiyah-rose" />
                      </div>
                      <h4 className="font-semibold text-aafiyah-charcoal mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-aafiyah-rose hover:bg-aafiyah-rose/90 text-white px-8 py-3 rounded-xl">
                  Create My Plan
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* AI Health Companion Feature */}
          <motion.div 
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-6" variants={fadeInUp}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-aafiyah-sage to-aafiyah-rose rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-aafiyah-charcoal">AI Health Companion - Haya</h3>
                    <p className="text-aafiyah-sage">Your 24/7 empathetic health assistant</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Meet Haya, your AI health companion trained specifically on women's health issues, 
                  Islamic cultural context, and PCOS/endometriosis management. She's available 24/7 
                  to answer questions, provide guidance, and offer emotional support.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Brain,
                      title: "Medical Knowledge",
                      description: "Trained on the latest women's health research and Islamic medicine principles"
                    },
                    {
                      icon: Heart,
                      title: "Emotional Support",
                      description: "Provides empathetic responses and mental health guidance"
                    },
                    {
                      icon: Mic,
                      title: "Voice & Text",
                      description: "Communicate naturally through voice or text in multiple languages"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-aafiyah-sage/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <benefit.icon className="w-5 h-5 text-aafiyah-sage" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-aafiyah-charcoal mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-aafiyah-sage hover:bg-aafiyah-sage/90 text-white px-8 py-3 rounded-xl">
                  Talk to Haya
                </Button>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1682941664177-7920d0e59418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBoZWFsdGhjYXJlJTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc1NjY1ODA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI chatbot healthcare conversation"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aafiyah-sage/20 to-transparent"></div>
                </div>
                
                {/* Floating Chat Bubble */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-aafiyah-sage rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 mb-1">
                        "I understand you're experiencing symptoms. Let's track them together."
                      </p>
                      <p className="text-xs text-aafiyah-sage font-medium">- Haya, your AI companion</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Symptom Tracker Feature */}
          <motion.div 
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative order-2 lg:order-1"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1701673965165-5b2936d3dc85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHN5bXB0b20lMjB0cmFja2luZyUyMGhlYWx0aHxlbnwxfHx8fDE3NTY2NTgwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Calendar symptom tracking interface"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aafiyah-rose/20 to-transparent"></div>
                </div>
                
                {/* Floating Insight Cards */}
                <motion.div 
                  className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aafiyah-rose rounded-xl flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-600">Pattern</p>
                    <p className="font-bold text-aafiyah-charcoal">Detected</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aafiyah-sage rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-600">Days Tracked</p>
                    <p className="font-bold text-aafiyah-charcoal">127</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div className="space-y-6 order-1 lg:order-2" variants={fadeInUp}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-aafiyah-rose to-aafiyah-sage rounded-2xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-aafiyah-charcoal">Intelligent Symptom Tracker</h3>
                    <p className="text-aafiyah-rose">Visual calendar with pattern recognition</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Track your symptoms, mood, cycle, and treatments with our intuitive calendar interface. 
                  Our AI identifies patterns and correlations to help you understand your body better 
                  and share meaningful data with healthcare providers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Calendar,
                      title: "Visual Calendar",
                      description: "Easy-to-use calendar interface for daily symptom logging"
                    },
                    {
                      icon: TrendingUp,
                      title: "Pattern Analysis",
                      description: "AI-powered insights into symptom patterns and triggers"
                    },
                    {
                      icon: FileText,
                      title: "Medical Reports",
                      description: "Generate comprehensive reports for doctor appointments"
                    },
                    {
                      icon: Shield,
                      title: "Private & Secure",
                      description: "Your health data remains completely private and encrypted"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-aafiyah-rose/20 rounded-xl flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-aafiyah-rose" />
                      </div>
                      <h4 className="font-semibold text-aafiyah-charcoal mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-aafiyah-rose hover:bg-aafiyah-rose/90 text-white px-8 py-3 rounded-xl">
                  Start Tracking
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Secure Medical Scan Analysis Feature */}
          <motion.div 
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-6" variants={fadeInUp}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-aafiyah-sage to-aafiyah-rose rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-aafiyah-charcoal">Secure Medical Scan Analysis</h3>
                    <p className="text-aafiyah-sage">AI-powered document analysis with complete privacy</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Upload your medical reports, lab results, and imaging scans for AI-powered analysis. 
                  Our system helps you understand your results in plain language while maintaining 
                  the highest levels of privacy and security.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Upload,
                      title: "Easy Upload",
                      description: "Securely upload any medical document or scan with one click"
                    },
                    {
                      icon: Zap,
                      title: "Instant Analysis",
                      description: "Get AI-powered insights and explanations within seconds"
                    },
                    {
                      icon: Shield,
                      title: "Bank-Level Security",
                      description: "End-to-end encryption ensures your data stays completely private"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-aafiyah-sage/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <benefit.icon className="w-5 h-5 text-aafiyah-sage" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-aafiyah-charcoal mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-aafiyah-sage hover:bg-aafiyah-sage/90 text-white px-8 py-3 rounded-xl">
                  Upload Documents
                </Button>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1646861108770-d645014b8f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdW1lbnQlMjBzY2FuJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzU2NjU4MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Medical document scan analysis"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aafiyah-sage/20 to-transparent"></div>
                </div>
                
                {/* Floating Security Badge */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-aafiyah-sage rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-aafiyah-charcoal">100% Secure</p>
                      <p className="text-xs text-gray-600">End-to-end encrypted</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Private Community Feature */}
          <motion.div 
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative order-2 lg:order-1"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1656009178152-1e4402050560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHN1cHBvcnQlMjBjb21tdW5pdHklMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1NjY1ODA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Women support community healthcare"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aafiyah-rose/20 to-transparent"></div>
                </div>
                
                {/* Floating Community Stats */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aafiyah-rose rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-600">Active Members</p>
                    <p className="font-bold text-aafiyah-charcoal">2.5K+</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aafiyah-sage rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-600">Support Given</p>
                    <p className="font-bold text-aafiyah-charcoal">24/7</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div className="space-y-6 order-1 lg:order-2" variants={fadeInUp}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-aafiyah-rose to-aafiyah-sage rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-aafiyah-charcoal">Private Community & Consultations</h3>
                    <p className="text-aafiyah-rose">Connect, share, and heal together</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Join a supportive community of women facing similar health challenges. Share experiences, 
                  get emotional support, and access expert consultations with healthcare professionals 
                  who understand Islamic values and women's unique needs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Users,
                      title: "Safe Space",
                      description: "Moderated community with verified members and strict privacy controls"
                    },
                    {
                      icon: Heart,
                      title: "Peer Support",
                      description: "Connect with women who understand your journey and challenges"
                    },
                    {
                      icon: Brain,
                      title: "Expert Access",
                      description: "Consult with Islamic-aware healthcare professionals"
                    },
                    {
                      icon: Shield,
                      title: "Anonymous Options",
                      description: "Share and seek support while maintaining complete anonymity"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-aafiyah-rose/20 rounded-xl flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-aafiyah-rose" />
                      </div>
                      <h4 className="font-semibold text-aafiyah-charcoal mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-aafiyah-rose hover:bg-aafiyah-rose/90 text-white px-8 py-3 rounded-xl">
                  Join Community
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mockup Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-aafiyah-charcoal mb-4">See Aafiyah in Action</h2>
            <p className="text-lg text-gray-600">Experience the intuitive design and powerful features</p>
          </motion.div>
          
          {/* Floating Mockups Layout */}
          <div className="relative h-[800px] flex items-center justify-center">
            {/* Central Main Mockup */}
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-64 h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <ImageWithFallback 
                  src= "/Aafiyah---health-care-/images/Dashboard.png"    
                  alt="Home Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center mt-4 font-semibold text-aafiyah-charcoal">Home Dashboard</h3>
            </motion.div>

            {/* Floating Mockups Around Central One */}
            {/* Top Left Mockup */}
            <motion.div 
              className="absolute top-16 left-8 md:left-16 lg:left-32 z-20"
              initial={{ opacity: 0, x: -100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-48 h-63 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100 transform -rotate-12 hover:rotate-6 hover:scale-110 transition-transform duration-300">
                <ImageWithFallback 
                  src="/Aafiyah---health-care-/images/ai_agent.png"
                  alt="AI Chatbot Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Top Right Mockup */}
            <motion.div 
              className="absolute top-24 right-8 md:right-16 lg:right-32 z-30"
              initial={{ opacity: 0, x: 100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-44 h-70 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100 transform rotate-12 hover:-rotate-3 hover:scale-110 transition-transform duration-300">
                <ImageWithFallback 
                  src="/Aafiyah---health-care-/images/Sympthom Tracker.png"
                  alt="Symptom Tracker"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bottom Left Mockup */}
            <motion.div 
              className="absolute bottom-16 left-16 md:left-24 lg:left-40 z-40"
              initial={{ opacity: 0, x: -80, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-40 h-63 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100 transform rotate-6 hover:-rotate-6 hover:scale-110 transition-transform duration-300">
                <ImageWithFallback 
                  src="/Aafiyah---health-care-/images/Nutrition.png"
                  alt="Wellness Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bottom Right Mockup */}
            <motion.div 
              className="absolute bottom-24 right-16 md:right-24 lg:right-40 z-50"
              initial={{ opacity: 0, x: 80, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="w-42 h-63 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100 transform -rotate-8 hover:rotate-3 hover:scale-110 transition-transform duration-300">
                <ImageWithFallback 
                  src="/Aafiyah---health-care-/images/upload scan.png"
                  alt="Medical Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Far Right Mockup (partially visible) */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 -right-8 md:right-4 lg:right-8 z-60"
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-36 h-72 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100 transform rotate-15 hover:rotate-6 hover:scale-110 transition-transform duration-300">
                <ImageWithFallback 
                  src="/Aafiyah---health-care-/images/Community.png"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Far Left Mockup (partially visible) */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 -left-8 md:left-4 lg:left-8 z-70"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="w-36 h-50 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-100 transform -rotate-15 hover:-rotate-6 hover:scale-110 transition-transform duration-300">
                <ImageWithFallback 
                  src="/Aafiyah---health-care-/images/Excersices.png"
                  alt="Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Feature Labels */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              "AI Health Companion",
              "Symptom Tracker", 
              "Medical Analysis",
              "Wellness Hub"
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <p className="text-sm font-medium text-aafiyah-charcoal">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* User Persona Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-aafiyah-cream to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-aafiyah-charcoal">Designed for Women Like Fatima</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Meet Fatima, a 28-year-old woman living in a peri-urban area. She values her privacy, 
                has limited mobility, and needs healthcare solutions that understand her cultural 
                context and personal circumstances.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aafiyah was built with women like Fatima in mind - providing accessible, 
                culturally sensitive healthcare support that respects privacy and empowers 
                women to take control of their health journey.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-aafiyah-rose to-aafiyah-sage rounded-full"></div>
                <div className="relative w-full h-full bg-white rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGlsbHVzdHJhdGlvbiUyMGF2YXRhcnxlbnwxfHx8fDE3NTY2NTc0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Fatima - User Persona"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-aafiyah-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-aafiyah-charcoal"
              variants={fadeInUp}
            >
              Empowerment Through Privacy & Cultural Sensitivity
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed"
              variants={fadeInUp}
            >
              At Aafiyah, we believe every woman deserves healthcare that respects her values, 
              protects her privacy, and understands her unique cultural context. We're building 
              a future where technology serves humanity with empathy and respect.
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-12"
              variants={staggerContainer}
            >
              {[
                {
                  icon: Shield,
                  title: "Privacy First",
                  description: "Your health data stays private and secure, always under your control."
                },
                {
                  icon: Heart,
                  title: "Cultural Sensitivity",
                  description: "Healthcare that understands and respects your cultural values."
                },
                {
                  icon: Brain,
                  title: "Empowerment",
                  description: "Tools and knowledge to help you make informed health decisions."
                }
              ].map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-aafiyah-sage rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-aafiyah-charcoal mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-aafiyah-charcoal mb-4">Choose Your Health Journey</h2>
            <p className="text-lg text-gray-600">Start with our free trial or unlock advanced features with Premium</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Freemium Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="relative p-8 border-2 border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-aafiyah-charcoal mb-2">Freemium Trial</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-aafiyah-sage">Free</span>
                      <span className="text-gray-600 ml-2">14-day trial</span>
                    </div>
                    <p className="text-gray-600">Perfect for getting started with your health journey</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Basic AI Health Companion (Haya)",
                      "Simple Symptom Tracking",
                      "Community Access",
                      "Basic Wellness Tips",
                      "Privacy Protection"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-aafiyah-sage rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-aafiyah-sage hover:bg-aafiyah-sage/90 text-white py-3 rounded-xl">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="relative p-8 border-2 border-aafiyah-rose rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white to-aafiyah-cream/30">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-aafiyah-rose text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
                
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-aafiyah-charcoal mb-2">Premium</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-aafiyah-rose">$19</span>
                      <span className="text-gray-600 ml-2">per month</span>
                    </div>
                    <p className="text-gray-600">Comprehensive health support with advanced features</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Advanced AI Health Companion with Medical Knowledge",
                      "Comprehensive Symptom Tracking & Analytics",
                      "Secure Medical Scan Analysis",
                      "Personalized Wellness Plans (Diet, Exercise, Spiritual)",
                      "Priority Community & Expert Consultations",
                      "Advanced Privacy Controls",
                      "Health Insights & Recommendations",
                      "24/7 Support Access"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-aafiyah-rose rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-aafiyah-rose hover:bg-aafiyah-rose/90 text-white py-3 rounded-xl">
                    Upgrade to Premium
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Cancel anytime • 30-day money-back guarantee
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-gray-600 mb-8">Trusted by thousands of women worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[
                "End-to-end Encryption",
                "HIPAA Compliant",
                "Cultural Sensitivity",
                "24/7 Privacy Protection"
              ].map((trust, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-aafiyah-sage/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-aafiyah-sage" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">{trust}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-aafiyah-sage to-aafiyah-rose">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold text-white"
              variants={fadeInUp}
            >
              Your Health, Your Privacy, Your Partner.
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 leading-relaxed"
              variants={fadeInUp}
            >
              Join thousands of women who have taken control of their health journey with Aafiyah.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button className="bg-white text-aafiyah-sage hover:bg-gray-100 px-12 py-4 text-lg rounded-xl shadow-xl">
                Join Aafiyah Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-aafiyah-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-aafiyah-sage rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold">Aafiyah</span>
          </div>
          <p className="text-gray-400">© 2025 Aafiyah. Empowering women's health with privacy and care.</p>
        </div>
      </footer>
    </div>
  );
}