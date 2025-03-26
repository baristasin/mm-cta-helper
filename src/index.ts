export class mmCTAClickHelper{
    static triggerCTA(): void{
        const w = window as any;

        if (w.FbPlayableAd?.onCTAClick) {
            console.log("✅ Facebook CTA");
            w.FbPlayableAd.onCTAClick();
          }
          
          else {
            console.log("⚠️ No known CTA, fallback triggered");
          }
    }
}