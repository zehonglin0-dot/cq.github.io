window.i18n = {
  zh: {
    brandTitle: "CQCLOUDFULFILLMENT 泰国云仓｜千易ERP系统对接操作指南",
    brandSub: "本指南用于指导客户完成：千易ERP系统登录、店铺授权绑定、商品建立、商品配对、入库操作、海外仓启用、订单审核设置。请严格按流程操作，以确保订单正常流转。",
    heroTitleHtml: '<span class="brand-main">CQCLOUDFULFILLMENT 泰国云仓</span><span class="brand-sub">千易ERP系统对接操作指南</span>',
    btnTop: "回到顶部",
    btnPdf: "打印 / 导出PDF",
    btnHtml: "导出当前HTML",
    tocTitle: "目录",
    tocPill: "当前页切换",
    tocFiles: "一、文件说明",
    toc1: "第一阶段：账号开通与登录",
    toc2: "第二阶段：店铺授权绑定",
    toc3: "第三阶段：建立系统商品（SKU创建）",
    toc4: "第四阶段：线上商品配对",
    toc5: "第五阶段：商品入库流程",
    toc6: "第六阶段：平台开启海外仓模式",
    toc7: "第七阶段：订单审核设置",
    toc8: "第八阶段：订单状态查看",
    tocErrors: "常见错误提示",
    tocFlow: "标准对接完成流程图",

    secFilesTitle: "一、文件说明",
    secFilesDesc: "本指南用于指导客户完成系统接入全流程。",
    secFilesList: [
      "千易ERP系统登录",
      "店铺授权绑定",
      "商品建立",
      "商品配对",
      "入库操作",
      "海外仓启用",
      "订单审核设置"
    ],

    sec1Title: "第一阶段：账号开通与登录",
    sec1Sub1: "1.1 系统账号开通",
    sec1Desc: "由我司销售为客户创建ERP账号：",
    f1Label1: "登录地址",
    f1Label2: "登录账号",
    f1Value2: "客户公司名称",
    f1Label3: "初始密码",
    sec1Note: "⚠ 首次登录后请立即修改密码并妥善保存。",
    sec1Sub2: "1.2 登录系统",
    sec1Steps: [
      "打开登录页面",
      "输入账号密码",
      "点击登录"
    ],

    sec2Title: "第二阶段：店铺授权绑定",
    sec2Sub1: "2.1 操作目的",
    sec2Desc: "将您的电商平台店铺授权给ERP系统，实现订单自动同步。",
    sec2Sub2: "2.2 操作路径",
    sec2Path: "设置 → 店铺管理 → 添加平台店铺",
    sec2Steps: [
      "选择平台",
      "输入店铺名称",
      "选择全球站点（非US）",
      "<b>店铺名称要和后台店铺名称一样</b>",
      "点击“前往授权”完成平台授权"
    ],
    sec2Sub3: "2.3 状态确认",
    sec2Status: [
      "启停状态：启用中",
      "授权状态：店铺已授权"
    ],
    sec2Note: "⚠ 若显示未授权，订单将无法同步。",
    sec2Pages: [
      "添加店铺页面",
      "授权成功页面"
    ],

    sec3Title: "第三阶段：建立系统商品（SKU创建）",
    sec3NoteTop: "⚠ 所有发往海外仓的商品，必须提前在ERP建立SKU。",
    sec3Sub1: "3.1 添加单品",
    sec3Path1: "商品 → 系统商品 → SKU → 添加SKU → 添加单品",
    sec3Th1: "填写信息",
    sec3Th2: "说明",
    sec3r1c1: "SKU编码（必须唯一）",
    sec3r1c2: "建议与平台/仓库统一编码策略",
    sec3r2c1: "商品名称",
    sec3r2c2: "清晰可识别（建议含系列/材质/颜色等）",
    sec3r3c1: "商品条码",
    sec3r3c2: "用于扫描识别，建议直接=SKU",
    sec3r4c1: "单品毛重（kg）",
    sec3r4c2: "必须真实",
    sec3r5c1: "单品净重（kg）",
    sec3r5c2: "必须真实",
    sec3r6c1: "单品尺寸（长×宽×高 cm）",
    sec3r6c2: "必须真实",
    sec3Note1: "重量与尺寸必须真实填写；该数据将影响运费计算与仓储计费。",
    sec3Sub2: "3.2 添加组合商品（套装商品）",
    sec3Desc2: "如销售套装产品：",
    sec3Steps2: [
      "先创建所有单品",
      "再新增组合商品"
    ],
    sec3Path2: "新增组合商品 → 填写SKU → 填写商品名称 → 选择商品 → 确认",
    sec3Note2: "组合商品必须由已存在单品构成；单品未建立前不得创建组合商品。",

    sec4Title: "第四阶段：线上商品配对",
    sec4Sub1: "4.1 操作目的",
    sec4Desc: "将平台SKU与ERP系统SKU进行绑定，确保订单正常出库。",
    sec4Sub2: "4.2 操作路径",
    sec4Path: "商品 → 线上商品 → 选择店铺 → 选择商品 → 点击配对",
    sec4Steps: [
      "选择：店铺SKU",
      "选择：对应ERP商品名称"
    ],
    sec4Note: "⚠ 未完成配对的商品将无法出库。",

    sec5Title: "第五阶段：商品入库流程",
    sec5Sub1: "5.1 创建入库单",
    sec5Path1: "库存 → 入库订单 → 新增",
    sec5Steps1: [
      "收货仓：选择对应账号名称",
      "添加商品 → 选择SKU → 填写数量"
    ],
    sec5Sub2: "5.2 填写入库信息",
    sec5Steps2: [
      "采购费用",
      "入库数量",
      "包装类型"
    ],
    sec5Note1: "<b>原厂整箱包装</b>：填写每箱数量、箱数、包装规格",
    sec5Note2: "<b>混装说明</b>：点击“混装”按钮；同一箱最多2个SKU；不同SKU必须有清晰物理隔离。<br>⚠ 不符合规范仓库有权拒收。",
    sec5Sub3: "5.3 提交入库单",
    sec5Steps3: [
      "点击保存",
      "点击提交",
      "状态显示“已下发”代表入库单成功提交",
      "复制入库单号并发送至业务对接群，以便仓库提前排仓"
    ],

    sec6Title: "第六阶段：平台开启海外仓模式",
    sec6Sub1: "6.1 添加海外仓库存",
    sec6Steps1: [
      "在平台后台：添加海外仓",
      "填写库存数量"
    ],
    sec6Sub2: "6.2 海外仓信息",
    sec6f1: "仓库名称",
    sec6v1: "CQCLOUDFULFILLMENT-TH-BK-001",
    sec6f2: "联系人",
    sec6v2: "Sence",
    sec6f3: "电话",
    sec6v3: "0626526356",
    sec6f4: "仓库地址（泰文）",
    sec6v4: "เลขที่2/1 ซอย เทียนทะเล 20 แยก 11 Samae Dam, Bang Khun Thian, Bangkok 10150",
    sec6Note: "⚠ 必须在平台后台选择“海外仓发货”模式。",

    sec7Title: "第七阶段：订单审核设置",
    sec7Sub1: "7.1 手动审核",
    sec7Path1: "订单 → 订单管理 → 已售订单 → 审核",
    sec7Steps1: [
      "选择：",
      "平台指定仓库 - CQCLOUDFILLMENT-TH-BK-001",
      "找到平台仓库为 CQCLOUDFILLMENT-TH-BK-001 的订单",
      "选择并审核订单",
      "发货仓库 - “自己仓库名称”，选择上门揽收"
    ],
    sec7Sub2: "7.2 自动审核（推荐）",
    sec7Path2: "订单 → 订单规则 → 新增规则",
    sec7Steps2: [
      "设置：订单条件",
      "勾选：自动审核并下发",
      "建议先测试1单确认无误后再全面开启"
    ],

    sec8Title: "第八阶段：订单状态查看",
    sec8Sub1: "8.1 订单发出时间",
    sec8Steps1: [
      "每日 16:00（下午4点）前审核完成的订单，当天发出",
      "每日 16:00 后审核完成的订单，次日发出"
    ],
    sec8Sub2: "8.2 打包完毕",
    sec8Path1: "订单 → 订单管理 → 待发货",
    sec8Steps2: [
      "订单进入“打包完成”状态，表示仓库已完成配货与打包",
      "等待快递公司揽收"
    ],
    sec8Sub3: "8.3 揽收成功",
    sec8Path2: "订单 → 订单管理 → 已出库 → 待揽收",
    sec8Steps3: [
      "系统显示“已发货”",
      "物流公司已完成揽收",
      "订单进入运输阶段"
    ],

    secErrorsTitle: "常见错误提示",
    secErrorsTh1: "问题",
    secErrorsTh2: "原因",
    errr1c1: "订单未同步",
    errr1c2: "店铺未授权",
    errr2c1: "订单无法出库",
    errr2c2: "未配对商品",
    errr3c1: "运费异常",
    errr3c2: "SKU尺寸重量错误",
    errr4c1: "仓库拒收",
    errr4c2: "未提交入库单或混装不规范",
    secErrorsNote: "排查顺序建议：<b>店铺授权状态</b> → <b>线上商品是否配对</b> → <b>SKU尺寸重量</b> → <b>入库单是否已下发</b>",

    secFlowTitle: "标准对接完成流程图",
    secFlowItems: [
      "账号创建",
      "店铺授权",
      "建立SKU",
      "商品配对",
      "创建入库单",
      "平台开启海外仓",
      "订单自动审核"
    ],

    prev: "上一步",
    next: "下一步",
    back: "返回开始",
    footer: "CQCLOUDFULFILLMENT · ERP Integration Guide"
  },

  en: {
    brandTitle: "CQCLOUDFULFILLMENT Thailand Warehouse | Qianyi ERP Integration Guide",
    brandSub: "This guide helps clients complete Qianyi ERP login, store authorization, product setup, product mapping, inbound operations, overseas warehouse activation, and order review settings.",
    heroTitleHtml: '<span class="brand-main">CQCLOUDFULFILLMENT Thailand Warehouse</span><span class="brand-sub">Qianyi ERP Integration Guide</span>',
    btnTop: "Back to Top",
    btnPdf: "Print / Export PDF",
    btnHtml: "Export Current HTML",
    tocTitle: "Contents",
    tocPill: "Current Section",
    tocFiles: "1. File Overview",
    toc1: "Phase 1: Account Setup & Login",
    toc2: "Phase 2: Store Authorization",
    toc3: "Phase 3: Create System Products (SKU)",
    toc4: "Phase 4: Online Product Mapping",
    toc5: "Phase 5: Inbound Process",
    toc6: "Phase 6: Enable Overseas Warehouse Mode",
    toc7: "Phase 7: Order Review Settings",
    toc8: "Phase 8: Order Status Review",
    tocErrors: "Common Errors",
    tocFlow: "Standard Completion Flow",

    secFilesTitle: "1. File Overview",
    secFilesDesc: "This guide walks clients through the full onboarding flow.",
    secFilesList: [
      "Qianyi ERP login",
      "Store authorization",
      "Product creation",
      "Product mapping",
      "Inbound operations",
      "Overseas warehouse activation",
      "Order review settings"
    ],

    sec1Title: "Phase 1: Account Setup & Login",
    sec1Sub1: "1.1 ERP Account Setup",
    sec1Desc: "Our sales team creates an ERP account for the client:",
    f1Label1: "Login URL",
    f1Label2: "Login Account",
    f1Value2: "Client company name",
    f1Label3: "Initial Password",
    sec1Note: "⚠ Please change the password immediately after first login.",
    sec1Sub2: "1.2 System Login",
    sec1Steps: [
      "Open the login page",
      "Enter account and password",
      "Click Login"
    ],

    sec2Title: "Phase 2: Store Authorization",
    sec2Sub1: "2.1 Purpose",
    sec2Desc: "Authorize your store to the ERP system for automatic order sync.",
    sec2Sub2: "2.2 Path",
    sec2Path: "Settings → Store Management → Add Platform Store",
    sec2Steps: [
      "Select platform",
      "Enter store name",
      "Select Global site (not US)",
      "<b>Store name must match backend store name</b>",
      "Click authorization to complete"
    ],
    sec2Sub3: "2.3 Status Check",
    sec2Status: [
      "Enable status: Enabled",
      "Authorization status: Store Authorized"
    ],
    sec2Note: "⚠ If unauthorized, orders cannot sync.",
    sec2Pages: [
      "Add store page",
      "Authorization success page"
    ],

    sec3Title: "Phase 3: Create System Products (SKU)",
    sec3NoteTop: "⚠ All products sent to overseas warehouse must be created in ERP first.",
    sec3Sub1: "3.1 Add Single Product",
    sec3Path1: "Products → System Products → SKU → Add SKU → Add Single Product",
    sec3Th1: "Field",
    sec3Th2: "Description",
    sec3r1c1: "SKU code (unique)",
    sec3r1c2: "Use unified code strategy",
    sec3r2c1: "Product name",
    sec3r2c2: "Clearly identifiable",
    sec3r3c1: "Barcode",
    sec3r3c2: "Recommended = SKU",
    sec3r4c1: "Gross weight (kg)",
    sec3r4c2: "Must be accurate",
    sec3r5c1: "Net weight (kg)",
    sec3r5c2: "Must be accurate",
    sec3r6c1: "Dimensions (L×W×H cm)",
    sec3r6c2: "Must be accurate",
    sec3Note1: "Weight and dimensions affect freight and warehouse fees.",
    sec3Sub2: "3.2 Add Bundle Product",
    sec3Desc2: "If selling bundles:",
    sec3Steps2: [
      "Create all single products first",
      "Then create bundle product"
    ],
    sec3Path2: "Add Bundle Product → Fill SKU → Fill Name → Select Products → Confirm",
    sec3Note2: "Bundles must be composed of existing products.",

    sec4Title: "Phase 4: Online Product Mapping",
    sec4Sub1: "4.1 Purpose",
    sec4Desc: "Bind platform SKU with ERP SKU to ensure shipment.",
    sec4Sub2: "4.2 Path",
    sec4Path: "Products → Online Products → Select Store → Select Product → Mapping",
    sec4Steps: [
      "Select store SKU",
      "Select ERP product"
    ],
    sec4Note: "⚠ Unmapped products cannot be shipped.",

    sec5Title: "Phase 5: Product Inbound Process",
    sec5Sub1: "5.1 Create Inbound Order",
    sec5Path1: "Inventory → Inbound Orders → Add New",
    sec5Steps1: [
      "Select receiving warehouse",
      "Add product → select SKU → enter quantity"
    ],
    sec5Sub2: "5.2 Fill Inbound Information",
    sec5Steps2: [
      "Purchase cost",
      "Inbound quantity",
      "Packaging type"
    ],
    sec5Note1: "<b>Original carton</b>: fill carton qty, cartons, packaging spec",
    sec5Note2: "<b>Mixed packing</b>: max 2 SKUs per box, with physical separation.",
    sec5Sub3: "5.3 Submit Inbound Order",
    sec5Steps3: [
      "Click Save",
      "Click Submit",
      "If status is Issued, submission is successful",
      "Send inbound order number to group"
    ],

    sec6Title: "Phase 6: Enable Overseas Warehouse Mode",
    sec6Sub1: "6.1 Add Overseas Warehouse Inventory",
    sec6Steps1: [
      "Add overseas warehouse in platform backend",
      "Fill inventory quantity"
    ],
    sec6Sub2: "6.2 Overseas Warehouse Information",
    sec6f1: "Warehouse Name",
    sec6v1: "CQCLOUDFULFILLMENT-TH-BK-001",
    sec6f2: "Contact",
    sec6v2: "Sence",
    sec6f3: "Phone",
    sec6v3: "0626526356",
    sec6f4: "Warehouse Address",
    sec6v4: "เลขที่2/1 ซอย เทียนทะเล 20 แยก 11 Samae Dam, Bang Khun Thian, Bangkok 10150",
    sec6Note: "⚠ Must choose overseas warehouse shipping mode.",

    sec7Title: "Phase 7: Order Review Settings",
    sec7Sub1: "7.1 Manual Review",
    sec7Path1: "Orders → Order Management → Sold Orders → Review",
    sec7Steps1: [
      "Select designated warehouse",
      "Find matching orders",
      "Review orders",
      "Choose pickup service"
    ],
    sec7Sub2: "7.2 Automatic Review",
    sec7Path2: "Orders → Order Rules → Add New Rule",
    sec7Steps2: [
      "Set order conditions",
      "Enable automatic review",
      "Test one order first"
    ],

    sec8Title: "Phase 8: Order Status Review",
    sec8Sub1: "8.1 Dispatch Time",
    sec8Steps1: [
      "Orders reviewed before 16:00 ship same day",
      "Orders reviewed after 16:00 ship next day"
    ],
    sec8Sub2: "8.2 Packing Completed",
    sec8Path1: "Orders → Order Management → Pending Shipment",
    sec8Steps2: [
      "Packing completed means warehouse finished processing",
      "Wait for courier pickup"
    ],
    sec8Sub3: "8.3 Pickup Successful",
    sec8Path2: "Orders → Order Management → Shipped → Pending Pickup",
    sec8Steps3: [
      "System shows shipped",
      "Courier completed pickup",
      "Order enters transit"
    ],

    secErrorsTitle: "Common Errors",
    secErrorsTh1: "Problem",
    secErrorsTh2: "Cause",
    errr1c1: "Order not synchronized",
    errr1c2: "Store not authorized",
    errr2c1: "Order cannot ship",
    errr2c2: "Product not mapped",
    errr3c1: "Shipping fee abnormal",
    errr3c2: "Wrong SKU dimension/weight",
    errr4c1: "Warehouse rejected",
    errr4c2: "Inbound order not submitted or mixed packing issue",
    secErrorsNote: "Troubleshooting: <b>authorization</b> → <b>mapping</b> → <b>dimensions/weight</b> → <b>inbound order</b>",

    secFlowTitle: "Standard Completion Flow",
    secFlowItems: [
      "Account Creation",
      "Store Authorization",
      "Create SKU",
      "Product Mapping",
      "Create Inbound Order",
      "Enable Overseas Warehouse",
      "Automatic Review"
    ],

    footer: "CQCLOUDFULFILLMENT · ERP Integration Guide"
  },

  th: {
    brandTitle: "CQCLOUDFULFILLMENT คลังสินค้าไทย｜คู่มือการเชื่อมต่อระบบ Qianyi ERP",
    brandSub: "คู่มือนี้ใช้สำหรับแนะนำขั้นตอนการเข้าสู่ระบบ การอนุญาตร้านค้า การสร้างสินค้า การจับคู่สินค้า การนำเข้าสินค้า และการตั้งค่าคำสั่งซื้อ",
    heroTitleHtml: '<span class="brand-main">CQCLOUDFULFILLMENT คลังสินค้าไทย</span><span class="brand-sub">คู่มือการเชื่อมต่อระบบ Qianyi ERP</span>',
    btnTop: "กลับด้านบน",
    btnPdf: "พิมพ์ / ส่งออก PDF",
    btnHtml: "ส่งออก HTML",
    tocTitle: "สารบัญ",
    tocPill: "ส่วนปัจจุบัน",
    tocFiles: "1. ภาพรวมเอกสาร",
    toc1: "ขั้นตอนที่ 1: เปิดบัญชีและเข้าสู่ระบบ",
    toc2: "ขั้นตอนที่ 2: อนุญาตร้านค้า",
    toc3: "ขั้นตอนที่ 3: สร้างสินค้าในระบบ (SKU)",
    toc4: "ขั้นตอนที่ 4: จับคู่สินค้าออนไลน์",
    toc5: "ขั้นตอนที่ 5: ขั้นตอนการนำเข้าสินค้า",
    toc6: "ขั้นตอนที่ 6: เปิดโหมดคลังต่างประเทศ",
    toc7: "ขั้นตอนที่ 7: การตรวจสอบคำสั่งซื้อ",
    toc8: "ขั้นตอนที่ 8: ตรวจสอบสถานะคำสั่งซื้อ",
    tocErrors: "ปัญหาที่พบบ่อย",
    tocFlow: "ลำดับการเชื่อมต่อมาตรฐาน",

    secFilesTitle: "1. ภาพรวมเอกสาร",
    secFilesDesc: "คู่มือนี้อธิบายขั้นตอนการเชื่อมต่อระบบทั้งหมด",
    secFilesList: [
      "เข้าสู่ระบบ Qianyi ERP",
      "อนุญาตร้านค้า",
      "สร้างสินค้า",
      "จับคู่สินค้า",
      "นำเข้าสินค้า",
      "เปิดใช้งานคลังต่างประเทศ",
      "ตั้งค่าการตรวจสอบคำสั่งซื้อ"
    ],

    sec1Title: "ขั้นตอนที่ 1: เปิดบัญชีและเข้าสู่ระบบ",
    sec1Sub1: "1.1 การเปิดบัญชี",
    sec1Desc: "ฝ่ายขายของเราจะสร้างบัญชี ERP ให้ลูกค้า:",
    f1Label1: "ลิงก์เข้าสู่ระบบ",
    f1Label2: "บัญชีผู้ใช้",
    f1Value2: "ชื่อบริษัทลูกค้า",
    f1Label3: "รหัสผ่านเริ่มต้น",
    sec1Note: "⚠ กรุณาเปลี่ยนรหัสผ่านทันทีหลังเข้าสู่ระบบครั้งแรก",
    sec1Sub2: "1.2 เข้าสู่ระบบ",
    sec1Steps: [
      "เปิดหน้าล็อกอิน",
      "กรอกบัญชีและรหัสผ่าน",
      "กดเข้าสู่ระบบ"
    ],

    sec2Title: "ขั้นตอนที่ 2: อนุญาตร้านค้า",
    sec2Sub1: "2.1 วัตถุประสงค์",
    sec2Desc: "อนุญาตร้านค้าของคุณในระบบ ERP เพื่อซิงก์คำสั่งซื้ออัตโนมัติ",
    sec2Sub2: "2.2 เส้นทาง",
    sec2Path: "การตั้งค่า → จัดการร้านค้า → เพิ่มร้านค้า",
    sec2Steps: [
      "เลือกแพลตฟอร์ม",
      "กรอกชื่อร้านค้า",
      "เลือก Global site",
      "<b>ชื่อร้านค้าต้องตรงกับชื่อหลังบ้าน</b>",
      "กดอนุญาตให้เสร็จสิ้น"
    ],
    sec2Sub3: "2.3 ตรวจสอบสถานะ",
    sec2Status: [
      "สถานะการเปิดใช้งาน: เปิดอยู่",
      "สถานะการอนุญาต: ได้รับอนุญาตแล้ว"
    ],
    sec2Note: "⚠ หากยังไม่ได้รับอนุญาต จะไม่สามารถซิงก์คำสั่งซื้อได้",
    sec2Pages: [
      "หน้าการเพิ่มร้านค้า",
      "หน้าสำเร็จ"
    ],

    sec3Title: "ขั้นตอนที่ 3: สร้างสินค้าในระบบ (SKU)",
    sec3NoteTop: "⚠ สินค้าที่จะส่งไปคลังต่างประเทศต้องสร้าง SKU ก่อน",
    sec3Sub1: "3.1 เพิ่มสินค้าเดี่ยว",
    sec3Path1: "สินค้า → สินค้าในระบบ → SKU → เพิ่ม SKU → เพิ่มสินค้าเดี่ยว",
    sec3Th1: "ข้อมูล",
    sec3Th2: "คำอธิบาย",
    sec3r1c1: "รหัส SKU",
    sec3r1c2: "ต้องไม่ซ้ำ",
    sec3r2c1: "ชื่อสินค้า",
    sec3r2c2: "ควรระบุได้ชัดเจน",
    sec3r3c1: "บาร์โค้ด",
    sec3r3c2: "แนะนำให้เท่ากับ SKU",
    sec3r4c1: "น้ำหนักรวม (kg)",
    sec3r4c2: "ต้องถูกต้อง",
    sec3r5c1: "น้ำหนักสุทธิ (kg)",
    sec3r5c2: "ต้องถูกต้อง",
    sec3r6c1: "ขนาด (ยาว×กว้าง×สูง cm)",
    sec3r6c2: "ต้องถูกต้อง",
    sec3Note1: "น้ำหนักและขนาดมีผลต่อค่าขนส่งและค่าคลัง",
    sec3Sub2: "3.2 เพิ่มสินค้าชุด",
    sec3Desc2: "หากขายสินค้าเป็นชุด:",
    sec3Steps2: [
      "สร้างสินค้าเดี่ยวทั้งหมดก่อน",
      "จากนั้นสร้างสินค้าชุด"
    ],
    sec3Path2: "เพิ่มสินค้าชุด → กรอก SKU → กรอกชื่อ → เลือกสินค้า → ยืนยัน",
    sec3Note2: "สินค้าชุดต้องประกอบจากสินค้าที่มีอยู่แล้ว",

    sec4Title: "ขั้นตอนที่ 4: จับคู่สินค้าออนไลน์",
    sec4Sub1: "4.1 วัตถุประสงค์",
    sec4Desc: "จับคู่ SKU ของแพลตฟอร์มกับ SKU ใน ERP เพื่อให้จัดส่งได้",
    sec4Sub2: "4.2 เส้นทาง",
    sec4Path: "สินค้า → สินค้าออนไลน์ → เลือกร้านค้า → เลือกสินค้า → จับคู่",
    sec4Steps: [
      "เลือก SKU ร้านค้า",
      "เลือกสินค้า ERP"
    ],
    sec4Note: "⚠ สินค้าที่ไม่จับคู่จะไม่สามารถส่งออกได้",

    sec5Title: "ขั้นตอนที่ 5: ขั้นตอนการนำเข้าสินค้า",
    sec5Sub1: "5.1 สร้างใบรับเข้า",
    sec5Path1: "สต็อก → ใบรับเข้า → เพิ่มใหม่",
    sec5Steps1: [
      "เลือกคลังรับสินค้า",
      "เพิ่มสินค้า → เลือก SKU → กรอกจำนวน"
    ],
    sec5Sub2: "5.2 กรอกข้อมูลรับเข้า",
    sec5Steps2: [
      "ต้นทุนการซื้อ",
      "จำนวนรับเข้า",
      "ประเภทบรรจุภัณฑ์"
    ],
    sec5Note1: "<b>กล่องโรงงานเดิม</b>: กรอกจำนวนต่อกล่อง จำนวนกล่อง และรายละเอียด",
    sec5Note2: "<b>การคละสินค้า</b>: สูงสุด 2 SKU ต่อกล่อง และต้องแยกชัดเจน",
    sec5Sub3: "5.3 ส่งใบรับเข้า",
    sec5Steps3: [
      "กดบันทึก",
      "กดส่ง",
      "หากสถานะเป็น Issued แปลว่าสำเร็จ",
      "ส่งเลขใบรับเข้าให้กลุ่มประสานงาน"
    ],

    sec6Title: "ขั้นตอนที่ 6: เปิดโหมดคลังต่างประเทศ",
    sec6Sub1: "6.1 เพิ่มสต็อกคลังต่างประเทศ",
    sec6Steps1: [
      "เพิ่มคลังต่างประเทศในระบบหลังบ้าน",
      "กรอกจำนวนสต็อก"
    ],
    sec6Sub2: "6.2 ข้อมูลคลังต่างประเทศ",
    sec6f1: "ชื่อคลัง",
    sec6v1: "CQCLOUDFULFILLMENT-TH-BK-001",
    sec6f2: "ผู้ติดต่อ",
    sec6v2: "Sence",
    sec6f3: "โทรศัพท์",
    sec6v3: "0626526356",
    sec6f4: "ที่อยู่คลัง",
    sec6v4: "เลขที่2/1 ซอย เทียนทะเล 20 แยก 11 Samae Dam, Bang Khun Thian, Bangkok 10150",
    sec6Note: "⚠ ต้องเลือกโหมดจัดส่งจากคลังต่างประเทศ",

    sec7Title: "ขั้นตอนที่ 7: การตรวจสอบคำสั่งซื้อ",
    sec7Sub1: "7.1 ตรวจสอบด้วยมือ",
    sec7Path1: "คำสั่งซื้อ → จัดการคำสั่งซื้อ → คำสั่งซื้อที่ขายแล้ว → ตรวจสอบ",
    sec7Steps1: [
      "เลือกคลังที่กำหนด",
      "ค้นหาคำสั่งซื้อ",
      "ตรวจสอบคำสั่งซื้อ",
      "เลือกบริการรับพัสดุ"
    ],
    sec7Sub2: "7.2 ตรวจสอบอัตโนมัติ",
    sec7Path2: "คำสั่งซื้อ → กฎคำสั่งซื้อ → เพิ่มใหม่",
    sec7Steps2: [
      "ตั้งเงื่อนไขคำสั่งซื้อ",
      "เปิดใช้งานการตรวจสอบอัตโนมัติ",
      "ทดสอบ 1 ออเดอร์ก่อน"
    ],

    sec8Title: "ขั้นตอนที่ 8: ตรวจสอบสถานะคำสั่งซื้อ",
    sec8Sub1: "8.1 เวลาจัดส่ง",
    sec8Steps1: [
      "ออเดอร์ที่ตรวจสอบก่อน 16:00 ส่งวันเดียวกัน",
      "หลัง 16:00 ส่งวันถัดไป"
    ],
    sec8Sub2: "8.2 แพ็กเสร็จ",
    sec8Path1: "คำสั่งซื้อ → จัดการคำสั่งซื้อ → รอจัดส่ง",
    sec8Steps2: [
      "แพ็กเสร็จแปลว่าคลังดำเนินการเสร็จ",
      "รอบริษัทขนส่งรับพัสดุ"
    ],
    sec8Sub3: "8.3 รับพัสดุสำเร็จ",
    sec8Path2: "คำสั่งซื้อ → จัดการคำสั่งซื้อ → จัดส่งแล้ว → รอรับพัสดุ",
    sec8Steps3: [
      "ระบบแสดงว่าจัดส่งแล้ว",
      "บริษัทขนส่งรับพัสดุแล้ว",
      "ออเดอร์เข้าสู่ระยะขนส่ง"
    ],

    secErrorsTitle: "ปัญหาที่พบบ่อย",
    secErrorsTh1: "ปัญหา",
    secErrorsTh2: "สาเหตุ",
    errr1c1: "คำสั่งซื้อไม่ซิงก์",
    errr1c2: "ร้านค้ายังไม่อนุญาต",
    errr2c1: "ไม่สามารถจัดส่ง",
    errr2c2: "สินค้ายังไม่จับคู่",
    errr3c1: "ค่าขนส่งผิดปกติ",
    errr3c2: "ขนาด/น้ำหนัก SKU ไม่ถูกต้อง",
    errr4c1: "คลังปฏิเสธรับ",
    errr4c2: "ยังไม่ได้ส่งใบรับเข้าหรือคละสินค้าไม่ถูกต้อง",
    secErrorsNote: "ลำดับการตรวจสอบ: <b>อนุญาตร้านค้า</b> → <b>จับคู่สินค้า</b> → <b>ขนาด/น้ำหนัก</b> → <b>ใบรับเข้า</b>",

    secFlowTitle: "ลำดับการเชื่อมต่อมาตรฐาน",
    secFlowItems: [
      "สร้างบัญชี",
      "อนุญาตร้านค้า",
      "สร้าง SKU",
      "จับคู่สินค้า",
      "สร้างใบรับเข้า",
      "เปิดคลังต่างประเทศ",
      "ตรวจสอบอัตโนมัติ"
    ],

    footer: "CQCLOUDFULFILLMENT · ERP Integration Guide"
  }
};