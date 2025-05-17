import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components";
import { Star } from "lucide-react";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Locale, useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export function Testimonials({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <section className="w-full py-12 md:pb-24 lg:pb-32" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t.rich("testimonials.heading")}
            </h2>
            <p className="max-w-[85%] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.rich("testimonials.subheading")}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp",
    role: "CTO",
    rating: 5,
    content:
      "This platform has streamlined our entire workflow. The automation features saved us countless hours, and the analytics provide invaluable insights.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    company: "GrowthStartup",
    role: "Founder",
    rating: 5,
    content:
      "We've seen a 40% increase in productivity since implementing this solution. The intuitive interface and robust features are exactly what we needed.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    company: "ScaleUp Inc",
    role: "Product Manager",
    rating: 4,
    content:
      "The integration capabilities are impressive. We were able to connect all our existing tools seamlessly. The customer support is outstanding too.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];
