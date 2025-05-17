import { Button } from "@workspace/ui/components";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "per month",
    features: [
      "Up to 10 users",
      "Basic analytics",
      "Email support",
      "API access",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    features: [
      "Up to 50 users",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited users",
      "Advanced analytics",
      "24/7 support",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section className="container mx-auto px-6 pt-24" id="pricing">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-xl  max-w-2xl mx-auto">
          Choose the plan that works best for your team
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border p-8`}
          >
            {plan.popular && (
              <span className="inline-block text-xs px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-medium">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">
                {plan.price}
              </span>
              {plan.period && <span className=""> {plan.period}</span>}
            </div>
            <ul className="mt-8 space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className={`mt-8 w-full`}>{plan.cta}</Button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="">
          Need something different?{" "}
          <a href="#" className=" hover:underline">
            Contact us
          </a>{" "}
          for custom solutions.
        </p>
      </div>
    </section>
  );
}
