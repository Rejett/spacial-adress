import background from "../../assets/signup-background.jpg";
import SignupForm from "./SignupForm";

export default function SignupPage() {
  return (
    <main className="w-full h-screen flex overflow-hidden relative">
      <img
        src={background}
        alt="Imagem de fundo"
        className="lg:w-[1000px] md:w-[500px] hidden md:object-cover md:bg-center md:shadow-lg sm:hidden md:flex lg:flex"
      />
      <section className="flex flex-col w-screen self-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-6 text-gray-100">
          Crie sua conta!
        </h1>
        <SignupForm />
      </section>
    </main>
  );
}
