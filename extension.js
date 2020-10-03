({
    name: "SDS011", // Category Name
    description: "Laser PM2.5 Sensor",
    author: "IOXhop.com",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#2C3E50", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="sds011_read">
                    <field name="pin">32</field>
                    <field name="type">1</field>
                </block>
            `
        }
    ]
});
