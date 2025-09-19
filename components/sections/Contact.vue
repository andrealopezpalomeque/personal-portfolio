<template>
  <section id="contact" class="section-padding bg-gray-50 dark:bg-gray-800">
    <div class="container-responsive">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Work Together
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Contact Information -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h3>

          <!-- Contact Methods -->
          <div class="space-y-6 mb-12">
            <div
              v-for="contact in contactMethods"
              :key="contact.type"
              class="flex items-center group"
            >
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                <Icon
                  :name="contact.icon"
                  class="w-6 h-6 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  {{ contact.label }}
                </h4>
                <a
                  :href="contact.href"
                  class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  :target="contact.external ? '_blank' : undefined"
                  :rel="contact.external ? 'noopener noreferrer' : undefined"
                >
                  {{ contact.value }}
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-4">
              Follow Me
            </h4>
            <div class="flex space-x-4">
              <UiButton
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                variant="outline"
                size="sm"
                :icon="social.icon"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3"
              />
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <UiCard variant="elevated" class="p-8">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Send a Message
          </h3>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Your full name"
              >
            </div>

            <!-- Email Field -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              >
            </div>

            <!-- Subject Field -->
            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="project">New Project</option>
                <option value="collaboration">Collaboration</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Budget Field -->
            <div>
              <label
                for="budget"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Project Budget (Optional)
              </label>
              <select
                id="budget"
                v-model="form.budget"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-plus">$25,000+</option>
              </select>
            </div>

            <!-- Message Field -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell me about your project, goals, and how I can help..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <UiButton
              type="submit"
              variant="primary"
              size="lg"
              :loading="isSubmitting"
              icon="ph:paper-plane-tilt"
              class="w-full"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </UiButton>
          </form>

          <!-- Success Message -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="showSuccess"
              class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
            >
              <div class="flex items-center">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-600 dark:text-green-400 mr-2"
                />
                <span class="text-green-800 dark:text-green-200">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </div>
            </div>
          </Transition>
        </UiCard>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects and help bring innovative ideas to life. Let's discuss your vision and create something amazing together.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UiButton
              variant="primary"
              size="lg"
              href="#contact"
              icon="ph:calendar"
            >
              Schedule a Call
            </UiButton>
            <UiButton
              variant="outline"
              size="lg"
              href="mailto:hello@example.com"
              icon="ph:envelope"
            >
              Email Me Directly
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Icon from '~/components/Icon.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const contactMethods = [
  {
    type: 'email',
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    icon: 'ph:envelope',
    external: false
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: 'ph:phone',
    external: false
  },
  {
    type: 'location',
    label: 'Location',
    value: 'Available Worldwide',
    href: '#',
    icon: 'ph:map-pin',
    external: false
  }
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: 'ph:github-logo' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'ph:linkedin-logo' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'ph:twitter-logo' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'ph:instagram-logo' }
]

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })

    // Show success message
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)

  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>