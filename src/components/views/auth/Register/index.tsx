import AuthLayout from '@/components/layouts/authLayout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useRouter } from 'next/router';
import { useState, FormEvent } from 'react';

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { push, query } = useRouter();
  const callbackUrl: string = (query?.callbackUrl as string) || '/';
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
    };

    const result = await fetch('/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      form.reset();
      push('/auth/login');
    } else {
      setIsLoading(false);
      setError('Email already registered');
    }
  };

  return (
    <AuthLayout title="Register" error={error} link="/auth/login" linkText="Already have an account? " linkLabel="Login here">
      <form onSubmit={handleSubmit}>
        <Input label="Fullname" name="fullname" type="text" placeholder="Enter your fullname" inform="fill in according to your ID" />
        <Input label="Email" name="email" type="email" placeholder="Email" inform="Please fill in using your active email" />
        <Input label="Password" name="password" type="password" placeholder="Password" inform="Please create a password with a minimum length of 6 characters" />

        <Button type="submit" stylesBtn="w-full rounded-full hover:bg-white bg-sky-700 text-sky-50 hover:text-sky-700 font-bold" nameBtn={isLoading ? 'Loading...' : 'Register'} />
      </form>
    </AuthLayout>
  );
};

export default RegisterView;
