
import React from "react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
              Welcome
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Blank Canvas for Your Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              This is a minimal starter template ready for you to import your VSCode project
              and make future changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-11 px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                Get Started
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg shadow-sm p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-semibold mb-4">Ready for Import</h2>
              <p className="text-muted-foreground">
                This project has been set up with a clean structure so you can easily replace 
                it with your own content from VSCode. The layout is responsive and follows 
                modern design principles.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
