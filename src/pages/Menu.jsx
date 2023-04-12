export default function Menu() {
  return (
    <>
      <div class='flex justify-center sm:justify-start '>
        <div class="absolute top-1/3 pl-4 max-w-xs text-center">
          <p className="text-gray-300 font-poppins font-medium text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            voluptas necessitatibus quis alias beatae temporibus, quod dolorem
            porro modi provident hic doloribus reiciendis dignissimos, dolorum
            laborum praesentium numquam nisi mollitia!
          </p>
        </div>
        <div className="absolute right-0 bottom-0 z-[-1]">
          <img src={require("../images/img-3.png")} alt="Imagen del menu" />
        </div>
      </div>
    </>
  );
}
