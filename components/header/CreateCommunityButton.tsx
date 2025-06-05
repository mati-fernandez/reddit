'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import { useState } from 'react';

function CreateCommunityButton() {
  const { user } = useUser();
  const { open, setOpen } = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="w-full p-2 pl-5 flex items-center rounded-md cursor-pointer bg-black text-white hover:bg-black transition-all duration-200 disabled:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!user}
      >
        <Plus className="w-4 h-4 mr-2" />
        {user ? 'Create Community' : 'Sign in to create a community'}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CreateCommunityButton;
