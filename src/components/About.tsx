
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable React applications with best practices",
    },
    {
      icon: Palette,
      title: "Modern UI",
      description: "Creating beautiful and responsive interfaces with Tailwind CSS",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast and optimized web applications with React",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm Shivam Varshney, a passionate frontend developer with expertise in modern web technologies.
            I like creating interactive and responsive web applications that deliver exceptional user experiences.
            Looking to contribute to innovative projects in a dynamic, growth-oriented environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed">
              My journey in web development is driven by curiosity and a passion for creating
              exceptional digital experiences. I specialize in React.js, modern JavaScript,
              and cutting-edge frontend technologies.
            </p>
            <p className="text-slate-300 leading-relaxed">
              With a strong foundation in HTML, CSS, and JavaScript, I build scalable applications
              using React and Tailwind CSS for beautiful styling.
              I also have experience with Java and SQL for backend integration.
            </p>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Java", "SQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-700 text-emerald-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
