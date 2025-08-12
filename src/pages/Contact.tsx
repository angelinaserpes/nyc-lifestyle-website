import SEO from "@/components/SEO";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ContactSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  message: z.string().min(10, { message: "Please write at least 10 characters." }),
});

type ContactValues = z.infer<typeof ContactSchema>;

const Contact = () => {
  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (values: ContactValues) => {
    console.log("Contact form submitted:", values);
    toast({
      title: "Message sent",
      description: "Thanks for reaching out — we'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <SEO
        title="Contact — NYC Living"
        description="Send a message to NYC Living with your questions or suggestions."
      />

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        We'd love to hear from you. Fill out the form below and we'll be in touch.
      </p>

      <div className="mt-8 max-w-xl rounded-lg border bg-card p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="How can we help?" rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" className="min-w-32">Send</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
