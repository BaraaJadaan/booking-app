// src/components/SearchForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@gluestack-ui/themed';

const schema = z.object({
  query: z.string().min(1),
  limit: z.number().min(1).max(20),
});

interface FormData {
  query: string;
  limit: number;
}

const SearchForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('query')} placeholder="Search query" />
      {errors.query && <span>{errors.query.message}</span>}
      <input type="number" {...register('limit')} placeholder="Limit" />
      {errors.limit && <span>{errors.limit.message}</span>}
      <button type="submit">Search</button>
    </form>
  );
};
// const styles = StyleSheet.create({
//   search: {
//     paddingVertical:20 ,
//     width: windowWidth*0.8,
//     // height: 40,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     // alignItems: 'center',
//     borderRadius: 50,
//   },
// });
export default SearchForm;
