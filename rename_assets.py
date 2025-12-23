import os

base_dir = '/Users/damirahavaashova/Desktop/bazieva-rental/frontend/public'

mappings_4 = {
    '4_1_ванная.png': '4_floor_bathroom.png',
    '4_1_вид.png': '4_floor_view.png',
    '4_1_вход.png': '4_floor_entrance.png',
    '4_1_комната.png': '4_floor_room.png',
    '4_1_комната_вход.png': '4_floor_room_entrance.png',
    '4_1_комната_стол.png': '4_floor_room_table.png',
    '4_1_кухня.png': '4_floor_kitchen.png',
    '4_1_кухня_стол.png': '4_floor_kitchen_table.png',
    '4_1_стол.png': '4_floor_table.png'
}

mappings_5 = {
    '5_2_(1).png': '5_floor_hallway.png',
    '5_2_балкон(пусто).png': '5_floor_balcony_empty.png',
    '5_2_балкон.png': '5_floor_balcony.png',
    '5_2_ванная.png': '5_floor_bathroom.png',
    '5_2_вид.png': '5_floor_view.png',
    '5_2_комната(1).png': '5_floor_room_view2.png',
    '5_2_комната.png': '5_floor_room.png',
    '5_2_коридор.png': '5_floor_corridor.png',
    '5_2_кухня(1).png': '5_floor_kitchen_view2.png',
    '5_2_кухня.png': '5_floor_kitchen.png'
}

def rename_files(folder, mappings):
    folder_path = os.path.join(base_dir, folder)
    if not os.path.exists(folder_path):
        print(f"Directory not found: {folder_path}")
        return

    for old_name, new_name in mappings.items():
        old_path = os.path.join(folder_path, old_name)
        new_path = os.path.join(folder_path, new_name)
        
        if os.path.exists(old_path):
            try:
                os.rename(old_path, new_path)
                print(f"Renamed: {old_name} -> {new_name}")
            except Exception as e:
                print(f"Error renaming {old_name}: {e}")
        else:
            print(f"File not found: {old_name}")

rename_files('4 floor', mappings_4)
rename_files('5 floor', mappings_5)
