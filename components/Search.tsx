'use client'

import Dropdown from "@/components/Dropdown";
import { navigate } from './actions'

export default function Search () {
	return (
		<div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
			<form action={navigate} className="md:w-1/2 flex gap-4 bg-neutral-100 dark:bg-neutral-900 p-2 rounded-xl items-center">
				<input name="query" className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300 grow h-12 rounded-xl w-1/4 px-4 md:px-8 bg-neutral-100 dark:bg-neutral-900" type="text" placeholder="Search.." />
				<Dropdown />
			</form>
		</div>
	);
}