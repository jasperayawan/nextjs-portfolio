export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center" id="contact">
      <div className="w-full">
        <div className="__title mb-4 text-center">Contact us</div>
        <div className="max-w-lg mx-auto">
          <form method="POST" className="w-full">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="ring-1 ring-zinc-400 pl-2 rounded-md py-1"
                required
              />
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="ring-1 ring-zinc-400 pl-2 rounded-md py-1"
                required
              />
              <label>Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="ring-1 ring-zinc-400 rounded-md p-2"
                placeholder="message"
              ></textarea>
              <button type="submit" className="__sbmt">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
