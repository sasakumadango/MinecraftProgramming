player.onChat("i", function () {
    blocks.fill(
    PLANKS_ACACIA,
    pos(-3, -1, -3),
    pos(3, 4, 3),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(-2, 0, -2),
    pos(2, 3, 2),
    FillOperation.Replace
    )
    blocks.place(GLASS, pos(-3, 1, 0))
    blocks.place(GLASS, pos(0, 1, -3))
    blocks.place(GLASS, pos(0, 1, 3))
    blocks.place(GLASS, pos(3, 1, 1))
    blocks.place(GLASS, pos(3, 1, -1))
    blocks.place(GLASS, pos(3, 2, 0))
    blocks.place(AIR, pos(3, 1, 0))
    blocks.place(AIR, pos(3, 0, 0))
    blocks.place(BED, pos(-2, 0, 2))
    blocks.place(CARTOGRAPHY_TABLE, pos(2, 0, 2))
    blocks.place(ENDER_CHEST, pos(2, 0, -2))
    blocks.place(SEA_LANTERN, pos(-2, 0, -2))
    blocks.fill(
    BIRCH_FENCE,
    pos(-3, 5, -3),
    pos(3, 5, 3),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(-2, 5, -2),
    pos(2, 5, 2),
    FillOperation.Replace
    )
})
player.onChat("j", function () {
    shapes.sphere(
    PINK_WOOL,
    pos(2, 5, 2),
    3,
    ShapeOperation.Replace
    )
    shapes.line(
    PLANKS_JUNGLE,
    pos(2, 0, 2),
    pos(2, 5, 2)
    )
})
player.onChat("o", function () {
    blocks.print(
    "APPLE",
    SEA_LANTERN,
    pos(0, 5, 0),
    WEST
    )
})
