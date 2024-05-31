import background from "../../assets/login-background.jpg";
import LoginForm from "./LoginForm";
import spaceShuttle from "../../assets/space-shuttle.png";

export default function LoginPage() {
  return (
    <main className="w-full h-screen flex overflow-hidden relative">
      <img
        src={background}
        alt="Imagem de fundo"
        className="lg:w-[1000px] md:w-[500px] hidden md:object-cover md:bg-center md:shadow-lg sm:hidden md:flex lg:flex"
      />
      <section className="flex flex-col w-screen self-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-6 text-gray-100">
          Inicie sua Sessão!
        </h1>
        <LoginForm />

        <img
          src={spaceShuttle}
          alt="Nave espacial"
          className="w-40 h-40 self-center -mb-10 mt-6"
        />
      </section>
    </main>
  );
}
