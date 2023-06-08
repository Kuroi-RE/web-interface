export default function Docs() {
  return (
    <div className="pt-24 flex flex-col">
      <section className="h-screen flex flex-col gap-10">
        <div className="px-5 flex flex-col gap-3">
          <h2 className="text-2xl"># Clone this Project</h2>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>
                git clone https://github.com/Kuroi-RE/web-interface.git
              </code>
            </pre>
            <pre data-prefix="$">
              <code>yarn add</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
        <div className="px-5 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl"># Running project</h2>
            <div className="alert alert-info shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>This project is Required API.</span>
              </div>
            </div>
          </div>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>yarn run dev</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
