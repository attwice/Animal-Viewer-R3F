import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function useMesh({ limit }: { limit: number }) {
  // @ts-ignore
  const { nodes } = useGLTF(`/models/mesh.glb`);

  const meshes: THREE.Mesh[] = useMemo(
    () =>
      Object.values(nodes)
        .filter((o: any) => o.isMesh)
        .splice(0, limit) as any,
    [limit, nodes]
  );

  return meshes;
}

useGLTF.preload(`/models/mesh.glb`);
