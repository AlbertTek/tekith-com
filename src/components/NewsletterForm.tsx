import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";

interface NewsletterFormProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const NewsletterForm = ({ email, setEmail, onSubmit }: NewsletterFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex gap-4 max-w-md mx-auto">
      <Input
        type="email"
        name="email_address"
        placeholder="Enter your email"
        className="bg-purple-900/10 border-purple-500/20"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600">
        Subscribe
      </Button>
    </form>
  );
};