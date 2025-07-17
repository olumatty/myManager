import React from "react";
import { GiExtraTime } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="mt-12 bg-gradient-to-tr border  from-[#f4f0f8] to-[#eff7f9]">
      <div className="max-w-6xl py-6 mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GiExtraTime className="h-8 w-8 text-[#6d47ff]" />
              <span className="text-gray-700 text-xl  md:text-base">
                my<span className="">Manager</span>
              </span>
            </div>
            <p className="text-sm text-[#6d47ff]">
              The ultimate Productivity tool for modern professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2 text-[#6d47ff]">
              <div>Features</div>
              <div>Pricing</div>
              <div>Integrations</div>
              <div>API</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2 text-[#6d47ff]">
              <div>Help Center</div>
              <div>Contact</div>
              <div>Status</div>
              <div>Updates</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-[#6d47ff]">
              <div>About</div>
              <div>Blog</div>
              <div>Careers</div>
              <div>Privacy</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 text mt-8 pt-8 text-center text-[#6d47ff]">
          <p>
            © {new Date().getFullYear()} designed and built by olumatty. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
