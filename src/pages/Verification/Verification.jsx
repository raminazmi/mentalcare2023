import Card from "../../components/Card/Card";
import email_img from "../.././assets/email.png"

export default function Verification() {
  return (
    <Card contentClassName="flex-col bg-[#091B36]  py-16 space-y-4 min-w-[520px]">
      <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <img className="w-[200px] ml-4" src={email_img} alt="email_img" />
          <div className="font-semibold text-3xl text-white">
            <p>تأكيد بواسطة البريد الالكتروني</p>
          </div>
          <br />
          <div className="flex flex-row text-sm font-medium text-gray-400">
            <p>لقد أرسلنا رمزًا إلى بريدك الإلكتروني  {"eslam"}</p>
          </div>
        </div>

        <div>
          <form action="" method="post">
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                <div className="w-16 h-16 ">
                  <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" maxLength="1" />
                </div>
                <div className="w-16 h-16 ">
                  <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" maxLength="1" />
                </div>
                <div className="w-16 h-16 ">
                  <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" maxLength="1" />
                </div>
                <div className="w-16 h-16 ">
                  <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" maxLength="1" />
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </Card>
  );
}
