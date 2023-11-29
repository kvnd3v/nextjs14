import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Customer'
}

export default function Page({ searchParams }: { searchParams?: { query?: string }; }) {
    const query = searchParams?.query || '';

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Customers
            </h1>
            <Search placeholder="Search customers..." />
            <Suspense key={query} fallback={<CustomersTableSkeleton />}>
                <Table query={query} />
            </Suspense>
        </div>
    );
}