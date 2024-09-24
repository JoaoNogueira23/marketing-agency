import z from 'zod'

const envSchema = z.object({
  API_URL: z.string().url(),
})

console.log(process.env.NEXT_PRIVATE_API_URL)

export const env = envSchema.parse(
  {
    API_URL: process.env.NEXT_PRIVATE_API_URL || '', // Força um valor de string para validação
  }
)