"use client";
import { useState } from "react";

export default function SavingsCalculator() {
  const [budget, setBudget] = useState(20000);

  const agencyFee = Math.round(budget * 0.17);
  const fastBillboardsFee = 1000;
  const savings = Math.max(0, agencyFee - fastBillboardsFee);

  return (
    <div className="bg-navy-light border border-white/10 rounded-2xl p-8">
      <h3 className="text-xl font-bold text-white mb-2">Your Savings Calculator</h3>
      <p className="text-white/60 text-sm mb-8">
        Enter your estimated billboard budget to see what you save vs. a traditional agency.
      </p>

      <div className="mb-8">
        <label className="block text-sm font-medium text-white/80 mb-3">
          Estimated Campaign Budget
        </label>
        <div className="relative">
          <input
            type="range"
            min={2000}
            max={100000}
            step={1000}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-yellow-accent mb-4"
            aria-label="Campaign budget slider"
          />
          <div className="flex justify-between text-xs text-white/40">
            <span>$2,000</span>
            <span>$100,000</span>
          </div>
        </div>
        <p className="text-center text-2xl font-bold text-yellow-accent mt-4">
          ${budget.toLocaleString()}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Traditional Agency
          </p>
          <p className="text-red-400 text-2xl font-bold">${agencyFee.toLocaleString()}</p>
          <p className="text-red-400/60 text-xs mt-1">17% commission fee</p>
        </div>
        <div className="bg-yellow-accent/10 border border-yellow-accent/30 rounded-xl p-5 text-center">
          <p className="text-yellow-accent text-xs font-semibold uppercase tracking-wider mb-2">
            FastBillboards
          </p>
          <p className="text-yellow-accent text-2xl font-bold">$1,000</p>
          <p className="text-yellow-accent/60 text-xs mt-1">flat fee, always</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5 text-center">
          <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-2">
            You Save
          </p>
          <p className="text-green-400 text-2xl font-bold">${savings.toLocaleString()}</p>
          <p className="text-green-400/60 text-xs mt-1">back in your pocket</p>
        </div>
      </div>
    </div>
  );
}
