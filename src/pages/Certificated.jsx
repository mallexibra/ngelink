import IMAGES from "../image";

function Certificated() {
  return (
    <div className="font-poppins">
      {IMAGES.map((item) => {
        return (
          <div className='flex justify-center items-center flex-col m-4 md:mx-2 bg-violet-600 rounded-md p-3'>
            <div key={item.id}>
              <img src={item.images} alt='sertifikat' height={'100px'}/>
            </div>
            <h3 className='font-bold text-base border-4 w-full text-center p-4'>
              {item.description}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default Certificated;
