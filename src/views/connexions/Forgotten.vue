<template>
    <Card class="m-4">
        <CardHeader>
            <CardTitle>Forgotten your password?</CardTitle>
            <CardDescription class="w-3/4">Enter your email below, and we’ll send you a link to reset it.</CardDescription>
        </CardHeader>
        <CardContent>
            <form @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <FormLabel>Email Adress</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="email@example.com" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
 
                <Button type="submit" class="mt-4">
                    Send Reset Link
                </Button>
            </form>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">

// imports shadcn
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'


import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'



//import router
import { useRouter } from 'vue-router'

const router = useRouter();


const formSchema = toTypedSchema(z.object({
    email: z
        .string()
        .email("Please enter a valid email address")
        .min(2, "Email must be at least 2 characters long")
        .max(50, "Email must not exceed 50 characters"),
}))


const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(() => {

    router.push("/connexion/login")
})
</script>