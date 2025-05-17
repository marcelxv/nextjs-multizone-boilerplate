import Link from "next/link";
import { Button } from "@workspace/ui/components";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Streamline Your Business Operations
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                All-in-one platform to manage, automate, and scale your business operations efficiently.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#demo">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90 rounded-xl flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-4xl font-bold mb-4">10,000+</div>
                  <div className="text-xl">Active Users</div>
                  <div className="mt-8 text-4xl font-bold">99.9%</div>
                  <div className="text-xl">Uptime Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
