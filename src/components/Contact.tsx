import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MapPin, Send } from 'lucide-react'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

type ContactFormValues = z.infer<typeof formSchema>

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('https://formspree.io/f/xdkdokea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Message Sent!', {
          description: "Thank you for your message. I'll get back to you soon.",
        })
        reset()
      } else {
        toast.error('Error', {
          description: 'Something went wrong. Please try again.',
        })
      }
    } catch {
      toast.error('Error', {
        description: 'Network issue. Please try again later.',
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sandrosaralidze15@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tbilisi, Georgia',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Let's work together</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="sm:text-2xl text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-background border bordernew rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="sm:text-lg text-[80%] font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl shadow-lg border bordernew">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  {...register('name')}
                  className="w-full px-4 py-3 bg-background border bordernew rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-background border bordernew rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className="w-full px-4 py-3 bg-background border bordernew rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
