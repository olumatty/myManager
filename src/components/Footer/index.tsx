import React from 'react';
import { GiExtraTime } from 'react-icons/gi';

const Footer = () => {
  return (
    <div className="mt-12 border bg-gradient-to-tr from-[#f4f0f8] to-[#eff7f9]">
      <div className="mx-auto max-w-6xl py-6 px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <GiExtraTime className="h-8 w-8 text-[#6d47ff]" />
              <span className="text-xl text-gray-700 md:text-base">
                my<span className="">Manager</span>
              </span>
            </div>
            <p className="text-sm text-[#6d47ff]">
              The ultimate Productivity tool for modern professionals.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <div className="space-y-2 text-[#6d47ff]">
              <div>Features</div>
              <div>Pricing</div>
              <div>Integrations</div>
              <div>API</div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <div className="space-y-2 text-[#6d47ff]">
              <div>Help Center</div>
              <div>Contact</div>
              <div>Status</div>
              <div>Updates</div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <div className="space-y-2 text-[#6d47ff]">
              <div>About</div>
              <div>Blog</div>
              <div>Careers</div>
              <div>Privacy</div>
            </div>
          </div>
        </div>

        <div className="text mt-8 border-t border-gray-800 pt-8 text-center text-[#6d47ff]">
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
