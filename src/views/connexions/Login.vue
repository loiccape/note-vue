<template>

    <Card class="m-4">
        <CardHeader>
            <CardTitle>Welcome to Note</CardTitle>
            <CardDescription>Please log in to continue</CardDescription>
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
                <FormField v-slot="{ componentField }" name="password">
                    <FormItem class="mt-2">
                        <div class="w-full flex justify-between items-end">
                            <FormLabel>Password</FormLabel>
                            <a href="/connexion/forgotten">Forgot</a>
                        </div>
                        <FormControl>
                            <Input type="password" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <Button type="submit" class="mt-4">
                    Submit
                </Button>
            </form>
            <CardFooter>
                <p class="mx-auto mt-4">No account yet? <a href="">Sign Up</a></p>
            </CardFooter>
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
import CardFooter from '@/components/ui/card/CardFooter.vue'

const router = useRouter();


const formSchema = toTypedSchema(z.object({
    email: z
        .string()
        .email("Please enter a valid email address")
        .min(2, "Email must be at least 2 characters long")
        .max(50, "Email must not exceed 50 characters"),
    password: z
        .string()
        .min(2, "Password must be at least 2 characters long")
        .max(50, "Password must not exceed 50 characters"),
}))


const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(() => {

    router.push("/notes/note")
})
</script>