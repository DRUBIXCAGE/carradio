import { ProductDetail } from "@/types/product";

export const onyxEzrProduct: ProductDetail = {
  id: "onyx-ezr",
  title: "SiriusXM Onyx EZR Satellite Radio with Vehicle Kit",
  modelNumber: "SXEZR1V1",
  sku: "SXEZR1V1-CAR",
  rating: 4.8,
  reviewCount: 3428,
  description:
    "Enjoy SiriusXM in your car and beyond with the Onyx EZR with Vehicle Kit. Featuring an easy-to-read 3.2-inch high-resolution split-screen display, you can view what's playing on other favorite channels without leaving your current broadcast. Store up to 10 channel presets, create custom music blends with TuneMix™, jump right back to your previous channel with One-Touch Jump™, and install easily with PowerConnect™ DIY vehicle technology.",
  highlightPoints: [
    "Large, easy-to-read 3.2\" high-resolution display with customizable black or white background contrast",
    "Split-screen view lets you see what's playing on other favorite channels while listening",
    "TuneMix™ automatically creates a blended listening experience from your saved favorite music channels",
    "One-Touch Jump™ quickly returns to the previous channel you were listening to with a single tap",
    "Store up to 10 of your favorite channels for rapid one-touch selection",
    "Do-It-Yourself vehicle installation connects through existing car audio via Aux-in or PowerConnect™ FM transmitter",
    "Full parental control features to lock and unlock channels containing mature content",
    "Compatible with SiriusXM Home Kit and Portable Boombox using a single subscription",
  ],
  kits: [
    {
      id: "vehicle",
      name: "Vehicle Kit",
      badge: "Most Popular",
      subtitle: "Complete DIY kit for car, truck, or SUV",
      price: 89.99,
      originalPrice: 99.99,
      description:
        "The standard factory vehicle bundle. Comes with the Onyx EZR radio receiver, PowerConnect vehicle cradle, magnetic roof antenna, dash and vent mounts, 12V power adapter, and aux audio cable.",
      images: [
        {
          src: "/images/onyx-ezr-vehicle-front.svg",
          alt: "SiriusXM Onyx EZR Radio Receiver in Vehicle Dock",
          label: "Vehicle Front View",
        },
        {
          src: "/images/onyx-ezr-split-screen.svg",
          alt: "Onyx EZR 3.2-inch High-Resolution Split-Screen Display Mode",
          label: "Split-Screen Mode",
        },
        {
          src: "/images/onyx-ezr-in-car.svg",
          alt: "Onyx EZR Installed on Car Dashboard and Vent Mount",
          label: "Vehicle Installation",
        },
        {
          src: "/images/onyx-ezr-kit-components.svg",
          alt: "Complete Onyx EZR Vehicle Kit Accessories and Contents",
          label: "What's in the Box",
        },
      ],
      included: [
        "Onyx EZR Satellite Radio Receiver (SXEZR1)",
        "PowerConnect™ Vehicle Dock Cradle",
        "Magnetic Mount Car Roof Antenna (20 ft cable)",
        "12V Cigarette Lighter PowerConnect Power Adapter",
        "Adjustable Swivel Dash Mount and Vent Mount Clamps",
        "3.5mm Stereo Aux Audio Cable (4 ft)",
        "Self-Adhesive Cable Routing Clips & Surface Prep Pad",
        "Quick Start Guide & Channel Lineup Directory",
      ],
    },
    {
      id: "vehicle-home",
      name: "Vehicle + Home Kit Bundle",
      badge: "Best Value • Save $20",
      subtitle: "Listen seamlessly in your vehicle and home/office",
      price: 119.99,
      originalPrice: 139.98,
      description:
        "Everything included in the Vehicle Kit PLUS the SXDH4 Home Kit. Move your Onyx EZR receiver between your car dock and home stereo dock using one single satellite radio subscription.",
      images: [
        {
          src: "/images/onyx-ezr-home-bundle.svg",
          alt: "Onyx EZR Vehicle and Home Bundle Overview",
          label: "Complete Bundle",
        },
        {
          src: "/images/onyx-ezr-vehicle-front.svg",
          alt: "Onyx EZR in PowerConnect Dock",
          label: "Vehicle System",
        },
        {
          src: "/images/accessory-home-kit.svg",
          alt: "SXDH4 Home Kit Dock and Indoor Antenna",
          label: "Home System",
        },
        {
          src: "/images/onyx-ezr-split-screen.svg",
          alt: "Split-Screen Display Contrast",
          label: "Display Modes",
        },
      ],
      included: [
        "Onyx EZR Satellite Radio Receiver (SXEZR1)",
        "PowerConnect™ Vehicle Dock Cradle & 12V Power Adapter",
        "Magnetic Mount Car Roof Antenna & Dash/Vent Mounts",
        "SXDH4 Desktop Home Cradle Dock",
        "Indoor/Outdoor Home Antenna with 21 ft cable",
        "Home AC Wall Power Adapter (120V)",
        "Stereo RCA to 3.5mm Audio Cable",
        "3.5mm Aux-In Audio Cable",
        "Complete Owner's Manual & SiriusXM Activation Guide",
      ],
    },
    {
      id: "radio-only",
      name: "Radio Only (Receiver Replacement)",
      badge: "Replacement Unit",
      subtitle: "For existing SiriusXM vehicle or home cradle owners",
      price: 69.99,
      originalPrice: 79.99,
      description:
        "Onyx EZR receiver unit only. Plugs directly into any existing SiriusXM PowerConnect vehicle cradle, SXDH4 home dock, or SXSD2 portable sound system boombox.",
      images: [
        {
          src: "/images/onyx-ezr-vehicle-front.svg",
          alt: "Onyx EZR Receiver Front View",
          label: "Receiver Unit",
        },
        {
          src: "/images/onyx-ezr-split-screen.svg",
          alt: "Onyx EZR High-Contrast Split Screen",
          label: "Display Screen",
        },
      ],
      included: [
        "Onyx EZR Satellite Radio Receiver Unit (SXEZR1)",
        "Quick Start Reference Guide",
        "SiriusXM Channel Lineup Directory",
      ],
    },
  ],
  specifications: [
    {
      category: "Physical Dimensions & Weight",
      items: [
        { label: "Radio Dimensions", value: "5.0 in (W) x 2.7 in (H) x 0.72 in (D) / 128 mm x 68 mm x 18.5 mm" },
        { label: "Radio Weight", value: "3.9 oz (111 g)" },
        { label: "Cradle Dimensions", value: "4.0 in (W) x 2.4 in (H) x 1.2 in (D) / 102 mm x 63 mm x 31 mm" },
        { label: "Antenna Type", value: "Commercial magnetic mount low-profile puck" },
        { label: "Antenna Cable Length", value: "20 ft (6.1 m) with right-angle SMB connector" },
      ],
    },
    {
      category: "Display & Controls",
      items: [
        { label: "Screen Type", value: "3.2-inch High-Resolution Graphical LCD" },
        { label: "Display Modes", value: "Split-screen simultaneous favorite browsing" },
        { label: "Contrast Settings", value: "White text on black background OR black text on white background" },
        { label: "Presets", value: "10 dedicated physical numeric presets (0-9)" },
        { label: "Smart Features", value: "TuneMix™, One-Touch Jump™, Channel Blocking Parental Controls" },
      ],
    },
    {
      category: "Audio & Connectivity",
      items: [
        { label: "Audio Output", value: "1/8 in (3.5 mm) stereo mini-jack (analog aux-out)" },
        { label: "FM Audio Transmission", value: "PowerConnect™ FM transmitter with customizable frequencies" },
        { label: "Antenna Connector", value: "SMB Female (SubMiniature version B)" },
        { label: "Audio Frequency Response", value: "20 Hz to 20 kHz ± 1 dB" },
        { label: "Signal-to-Noise Ratio (S/N)", value: "Greater than 73 dB" },
      ],
    },
    {
      category: "Electrical & Environmental",
      items: [
        { label: "Input Power Requirement", value: "9–16 V DC, 500 mA (max)" },
        { label: "Supplied Adapter Output", value: "5.0 V DC, 1.5 A regulated" },
        { label: "Operating Temperature", value: "-4°F to +140°F (-20°C to +60°C)" },
        { label: "Storage Temperature", value: "-40°F to +185°F (-40°C to +85°C)" },
        { label: "Satellite Frequency Band", value: "2320.0 MHz to 2332.5 MHz" },
      ],
    },
    {
      category: "Warranty & Support",
      items: [
        { label: "Manufacturer Warranty", value: "1-Year Limited SiriusXM Replacement Warranty" },
        { label: "Money-Back Guarantee", value: "30-Day Hassle-Free Returns" },
        { label: "Phone Support & Orders", value: "+1-833-344-2286 (Toll-Free Customer Care)" },
        { label: "Authorized Retailer", value: "Car FM Radio (carfmradio.com)" },
      ],
    },
  ],
};

