import Button from "@/components/button";
export default function Home() {
  return (
    <div>
        <h1 className="flex justify-center text-4xl">Home</h1><br/>
        <h2 className="flex justify-center text-2xl">
          Welcome to the home page!
        </h2>
      <div className="flex justify-center mt-10">
        <Button>Primary Button</Button>
      </div>
    </div>
  );
}
