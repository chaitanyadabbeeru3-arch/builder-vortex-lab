import { Link } from "react-router-dom";
import { Construction, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PlaceholderProps {
  title: string;
  description: string;
  features?: string[];
}

export default function Placeholder({ 
  title, 
  description, 
  features = [] 
}: PlaceholderProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="max-w-2xl w-full text-center">
          <CardContent className="p-12 space-y-6">
            <div className="flex justify-center mb-6">
              <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center">
                <Construction className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              {description}
            </p>

            {features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Coming Soon Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              
              <Button variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Request This Feature
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              This page is under development. Continue prompting to help build out this feature!
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
