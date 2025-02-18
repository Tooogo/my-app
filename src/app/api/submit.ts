import type { NextApiRequest, NextApiResponse } from 'next'
 
interface ItemData {
  // Define the structure of data here, for example:
  name: string;
  description: string;
}

async function createItem(data: ItemData): Promise<string> {
    console.log('data', data);
    // アイテムを作成する処理（例として、タイムスタンプを使って ID を生成）
    const newId = 'item-' + Date.now();
    
    // 生成した ID のログ出力
    console.log("createItem created item with id:", newId);
    
    // 生成した ID を返す
    return newId;
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  const id = await createItem(data)
  console.log('id', id)
  res.status(200).json({ id })
}