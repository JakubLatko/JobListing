export default function FilterItem({ item }: { item: string }) {
	return (
		<div className="flex bg-background max-w-fit  rounded-l-md">
			<p className="bg-background text-accent font-medium p-1">{item}</p>
			<button className="bg-accent  aspect-auto px-2 rounded-r-md hover:cursor-pointer hover:bg-secondary">
				<img src="../public/images/clear.svg" alt="" />
			</button>
		</div>
	);
}
