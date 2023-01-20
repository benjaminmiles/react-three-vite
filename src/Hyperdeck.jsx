import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hyperdeck(props) {
  const { nodes, materials } = useGLTF("/hyperdeck.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.82, 0.15, 0.66]} rotation={[0, -Math.PI / 2, 0]}>
        <group scale={2}>
          <group scale={2}>
            <mesh geometry={nodes.Body.geometry} material={materials.Body} position={[0, 0, 0.11]} scale={[0.07, 0.07, 0.09]} />
            <mesh
              geometry={nodes.Eye.geometry}
              material={materials.Eye}
              position={[0, 0, 0.05]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.06}
            >
              <mesh geometry={nodes.Pupil.geometry} material={materials.Pupil} position={[0, 0, 0.46]} scale={[0.4, 0.4, 0.16]} />
            </mesh>
          </group>
        </group>
      </group>
      <group position={[-0.06, 0.25, -0.06]}>
        <group position={[-0.02, 2.37, -0.01]}>
          <group position={[0.02, 0.1, 0]}>
            <group position={[-0.62, 0, 0]}>
              <mesh geometry={nodes.HeaterGlass_E.geometry} material={materials.HD_CeilingHeater} position={[-0.01, 0.01, 0]} />
              <mesh geometry={nodes.HeaterShell_E.geometry} material={materials.HD_CeilingHeater} />
            </group>
            <group position={[0, 0, 0.62]}>
              <mesh geometry={nodes.HeaterGlass_N.geometry} material={materials.HD_CeilingHeater} position={[0, 0.01, 0.01]} />
              <mesh geometry={nodes.HeaterShell_N.geometry} material={materials.HD_CeilingHeater} />
            </group>
            <group position={[0, 0, -0.62]}>
              <mesh geometry={nodes.HeaterGlass_S.geometry} material={materials.HD_CeilingHeater} position={[0, 0.01, -0.01]} />
              <mesh geometry={nodes.HeaterShell_S.geometry} material={materials.HD_CeilingHeater} />
            </group>
            <group position={[0.62, 0, 0]}>
              <mesh geometry={nodes.HeaterGlass_W.geometry} material={materials.HD_CeilingHeater} position={[-3.37, -2.73, -2.57]} />
              <mesh geometry={nodes.HeaterShell_W.geometry} material={materials.HD_CeilingHeater} />
            </group>
          </group>
          <group position={[0, 0.02, 0]}>
            <mesh geometry={nodes.Support_NE.geometry} material={materials.HD_CeilingSupport} position={[-1.93, 0.02, 1.16]} />
            <mesh geometry={nodes.Support_NW.geometry} material={materials.HD_CeilingSupport} position={[1.98, 0.02, 1.16]} />
            <mesh geometry={nodes.Support_SE.geometry} material={materials.HD_CeilingSupport} position={[-1.93, 0.02, -1.16]} />
            <mesh geometry={nodes.Support_SW.geometry} material={materials.HD_CeilingSupport} position={[1.98, 0.02, -1.16]} />
          </group>
          <group position={[0.02, 0, 0]}>
            <group position={[-0.76, 0.19, 0.75]}>
              <mesh geometry={nodes.CeilingHook_NE.geometry} material={materials.HD_SmallParts} position={[-0.51, -0.27, 0.2]} />
              <mesh geometry={nodes.CeilingTile_NE_1.geometry} material={materials.HD_SmallParts} />
              <mesh geometry={nodes.CeilingTile_NE_2.geometry} material={materials.HD_CeilingTile} />
            </group>
            <group position={[0.76, 0.19, 0.75]}>
              <mesh geometry={nodes.CeilingHook_NW.geometry} material={materials.HD_SmallParts} position={[0.52, -0.27, 0.2]} />
              <mesh geometry={nodes.CeilingTile_NW_1.geometry} material={materials.HD_SmallParts} />
              <mesh geometry={nodes.CeilingTile_NW_2.geometry} material={materials.HD_CeilingTile} />
            </group>
            <group position={[-0.55, 0.19, -0.75]}>
              <mesh geometry={nodes.CeilingHook_SE.geometry} material={materials.HD_SmallParts} position={[-0.71, -0.27, -0.21]} />
              <group position={[-0.21, 0, 0]}>
                <mesh geometry={nodes.CeilingTile_SE_1.geometry} material={materials.HD_SmallParts} />
                <mesh geometry={nodes.CeilingTile_SE_2.geometry} material={materials.HD_CeilingTile} />
              </group>
            </group>
            <group position={[0.55, 0.19, -0.75]}>
              <mesh geometry={nodes.CeilingHook_SW.geometry} material={materials.HD_SmallParts} position={[0.73, -0.27, -0.21]} />
              <group position={[0.21, 0, 0]}>
                <mesh geometry={nodes.CeilingTile_SW_1.geometry} material={materials.HD_SmallParts} />
                <mesh geometry={nodes.CeilingTile_SW_2.geometry} material={materials.HD_CeilingTile} />
              </group>
            </group>
          </group>
        </group>
        <group position={[0, 0.36, -0.21]}>
          <mesh geometry={nodes.Door_NE.geometry} material={materials.HD_FrontDoors} position={[-1.95, 0.24, 2.04]} />
          <mesh geometry={nodes.Door_NW.geometry} material={materials.HD_FrontDoors} position={[1.94, 0.24, 2.04]} />
          <mesh geometry={nodes.Door_SE.geometry} material={materials.HD_BackDoors} position={[-2.12, 0.23, -1.83]} />
          <mesh geometry={nodes.Door_SW.geometry} material={materials.HD_BackDoors} position={[2.12, 0.23, -1.83]} />
        </group>
        <group position={[0, -0.13, 0.01]}>
          <group position={[0, 0, -0.01]}>
            <group position={[-1.04, 0, 0]}>
              <mesh geometry={nodes.InnerPlatform_E_1.geometry} material={materials.HD_InnerSides} />
              <mesh geometry={nodes.InnerPlatform_E_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[0, 0, 1.04]}>
              <mesh geometry={nodes.InnerPlatform_N_1.geometry} material={materials.HD_InnerSides} />
              <mesh geometry={nodes.InnerPlatform_N_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[-1.04, 0, 1.04]}>
              <mesh geometry={nodes.InnerPlatform_NE_1.geometry} material={materials.HD_InnerCorners} />
              <mesh geometry={nodes.InnerPlatform_NE_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[1.04, 0, 1.04]}>
              <mesh geometry={nodes.InnerPlatform_NW_1.geometry} material={materials.HD_InnerCorners} />
              <mesh geometry={nodes.InnerPlatform_NW_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[0, 0, -1.04]}>
              <mesh geometry={nodes.InnerPlatform_S_1.geometry} material={materials.HD_InnerSides} />
              <mesh geometry={nodes.InnerPlatform_S_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[-1.04, 0, -1.04]}>
              <mesh geometry={nodes.InnerPlatform_SE_1.geometry} material={materials.HD_SmallParts} />
              <mesh geometry={nodes.InnerPlatform_SE_2.geometry} material={materials.HD_InnerCorners} />
            </group>
            <group position={[1.04, 0, -1.04]}>
              <mesh geometry={nodes.InnerPlatform_SW_1.geometry} material={materials.HD_InnerCorners} />
              <mesh geometry={nodes.InnerPlatform_SW_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[1.04, 0, 0]}>
              <mesh geometry={nodes.InnerPlatform_W_1.geometry} material={materials.HD_InnerSides} />
              <mesh geometry={nodes.InnerPlatform_W_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <mesh geometry={nodes.InnerPlatform_C_1.geometry} material={materials.HD_InnerCenter} />
            <mesh geometry={nodes.InnerPlatform_C_2.geometry} material={materials.HD_SmallParts} />
          </group>
          <group position={[0, 0, -0.01]}>
            <group position={[-2.15, 0, 0.74]}>
              <mesh geometry={nodes.OuterFloor_E1_1.geometry} material={materials.HD_OuterSides_EW} />
              <mesh geometry={nodes.OuterFloor_E1_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[-2.15, 0, -0.74]}>
              <mesh geometry={nodes.OuterFloor_E2_1.geometry} material={materials.HD_SmallParts} />
              <mesh geometry={nodes.OuterFloor_E2_2.geometry} material={materials.HD_OuterSides_EW} />
            </group>
            <group position={[0.74, 0, 2.06]}>
              <mesh geometry={nodes.OuterFloor_N1_1.geometry} material={materials.HD_SmallParts} />
              <mesh geometry={nodes.OuterFloor_N1_2.geometry} material={materials.HD_OuterSides_NS} />
            </group>
            <group position={[-0.74, 0, 2.06]}>
              <mesh geometry={nodes.OuterFloor_N2_1.geometry} material={materials.HD_OuterSides_NS} />
              <mesh geometry={nodes.OuterFloor_N2_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[-2.12, 0, 2.03]}>
              <mesh geometry={nodes.OuterFloor_NE_1.geometry} material={materials.HD_OuterCorners} />
              <mesh geometry={nodes.OuterFloor_NE_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[2.12, 0, 2.03]}>
              <mesh geometry={nodes.OuterFloor_NW_1.geometry} material={materials.HD_OuterCorners} />
              <mesh geometry={nodes.OuterFloor_NW_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[-0.75, 0, -2.06]}>
              <mesh geometry={nodes.OuterFloor_S1_1.geometry} material={materials.HD_SmallParts} />
              <mesh geometry={nodes.OuterFloor_S1_2.geometry} material={materials.HD_OuterSides_NS} />
            </group>
            <group position={[0.74, 0, -2.06]}>
              <mesh geometry={nodes.OuterFloor_S2_1.geometry} material={materials.HD_OuterSides_NS} />
              <mesh geometry={nodes.OuterFloor_S2_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[-2.12, 0, -2.03]}>
              <mesh geometry={nodes.OuterFloor_SE_1.geometry} material={materials.HD_OuterCorners} />
              <mesh geometry={nodes.OuterFloor_SE_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[2.12, 0, -2.03]}>
              <mesh geometry={nodes.OuterFloor_SW_1.geometry} material={materials.HD_OuterCorners} />
              <mesh geometry={nodes.OuterFloor_SW_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[2.15, 0, -0.74]}>
              <mesh geometry={nodes.OuterFloor_W1_1.geometry} material={materials.HD_OuterSides_EW} />
              <mesh geometry={nodes.OuterFloor_W1_2.geometry} material={materials.HD_SmallParts} />
            </group>
            <group position={[2.15, 0, 0.74]}>
              <mesh geometry={nodes.OuterFloor_W2_1.geometry} material={materials.HD_OuterSides_EW} />
              <mesh geometry={nodes.OuterFloor_W2_2.geometry} material={materials.HD_SmallParts} />
            </group>
          </group>
          <group position={[0, -0.07, 2.04]}>
            <group position={[-2.09, 0, -0.01]}>
              <mesh geometry={nodes.NE_Stair_1.geometry} material={materials.HD_SmallParts} />
              <mesh geometry={nodes.NE_Stair_2.geometry} material={materials.HD_Stairs} />
            </group>
            <group position={[2.1, 0, 0.01]}>
              <mesh geometry={nodes.NW_Stair_1.geometry} material={materials.HD_Stairs} />
              <mesh geometry={nodes.NW_Stair_2.geometry} material={materials.HD_SmallParts} />
            </group>
          </group>
          <mesh geometry={nodes.PlatformFrame.geometry} material={materials.HD_SmallParts} position={[0, 0.08, -0.02]} />
        </group>
        <group position={[0, 1.07, 0]}>
          <group position={[-2.48, 0, 0]}>
            <group position={[0, -0.71, 0]}>
              <group position={[0.19, 0.01, 0.61]}>
                <mesh geometry={nodes.E_Bottom_Vent_L_1.geometry} material={materials.HD_Vents} position={[-0.46, -0.62, -3.18]} />
                <mesh
                  geometry={nodes.E_Bottom_Vent_L_Ring.geometry}
                  material={materials.HD_WhiteEmissive}
                  position={[-0.46, -0.62, -3.18]}
                />
              </group>
              <group position={[0.19, 0.01, -0.61]}>
                <mesh geometry={nodes.E_Bottom_Vent_R_1.geometry} material={materials.HD_Vents} />
                <mesh
                  geometry={nodes.E_Bottom_Vent_R_Ring.geometry}
                  material={materials.HD_WhiteEmissive}
                  position={[-0.46, -0.62, -1.96]}
                />
              </group>
              <mesh geometry={nodes.E_Bottom_Wall.geometry} material={materials.HD_Walls} position={[-0.01, 0, 0]} />
            </group>
            <group position={[0, 0.71, 0]}>
              <group position={[0.19, 0.01, 0.61]}>
                <mesh geometry={nodes.E_Top_Vent_L_1.geometry} material={materials.HD_Vents} position={[-0.46, -2.04, -3.18]} />
                <mesh geometry={nodes.E_Top_Vent_L_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-0.46, -2.04, -3.18]} />
              </group>
              <group position={[0.19, 0.01, -0.61]}>
                <mesh geometry={nodes.E_Top_Vent_R_1.geometry} material={materials.HD_Vents} />
                <mesh geometry={nodes.E_Top_Vent_R_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-0.46, -2.04, -1.96]} />
              </group>
              <mesh geometry={nodes.E_Top_Wall.geometry} material={materials.HD_Walls} position={[-0.01, 0, 0]} />
            </group>
            <group position={[0.19, 0.01, 0.61]}>
              <mesh geometry={nodes.E_Mid_Vent_L_1.geometry} material={materials.HD_Vents} position={[-0.46, -1.33, -3.18]} />
              <mesh geometry={nodes.E_Mid_Vent_L_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-0.46, -1.33, -3.18]} />
            </group>
            <group position={[0.19, 0.01, -0.61]}>
              <mesh geometry={nodes.E_Mid_Vent_R_1.geometry} material={materials.HD_Vents} />
              <mesh geometry={nodes.E_Mid_Vent_R_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-0.46, -1.33, -1.96]} />
            </group>
            <mesh geometry={nodes.E_Mid_Wall.geometry} material={materials.HD_Walls} position={[-0.01, 0, 0]} />
          </group>
          <group position={[0, 0, 2.3]}>
            <group position={[0, -0.71, 0]}>
              <group position={[0.61, 0.01, -0.19]}>
                <mesh geometry={nodes.N_Bottom_Vent_L_1.geometry} material={materials.HD_Vents} />
                <mesh
                  geometry={nodes.N_Bottom_Vent_L_Ring.geometry}
                  material={materials.HD_WhiteEmissive}
                  position={[-3.36, -0.62, -4.68]}
                />
              </group>
              <group position={[-0.61, 0.01, -0.19]}>
                <mesh geometry={nodes.N_Bottom_Vent_R_1.geometry} material={materials.HD_Vents} />
                <mesh
                  geometry={nodes.N_Bottom_Vent_R_Ring.geometry}
                  material={materials.HD_WhiteEmissive}
                  position={[-2.14, -0.62, -4.68]}
                />
              </group>
              <mesh geometry={nodes.N_Bottom_Wall.geometry} material={materials.HD_Walls} position={[-0.01, 0, 0.01]} />
            </group>
            <group position={[0, 0.01, 0]}>
              <group position={[-0.01, -0.26, 0.11]}>
                <group position={[0.01, 0, 0]}>
                  <mesh geometry={nodes.Center_Frame.geometry} material={materials.HD_Screens} position={[0, 0.01, 0.05]} />
                  <mesh geometry={nodes.CenterTablet_Screen.geometry} material={materials.HD_Screens} position={[0, 0.01, 0.05]} />
                </group>
                <group position={[-1.12, -0.01, 0.07]}>
                  <mesh geometry={nodes.Left_Frame.geometry} material={materials.HD_Screens} position={[0, 0, 0.02]} />
                  <mesh geometry={nodes.LeftTablet_Screen.geometry} material={materials.HD_Screens} position={[0, 0, 0.02]} />
                </group>
                <group position={[1.12, -0.01, 0.07]}>
                  <mesh geometry={nodes.RightTablet_Frame.geometry} material={materials.HD_Screens} position={[0, -0.01, 0.05]} />
                  <mesh geometry={nodes.RightTablet_Screen.geometry} material={materials.HD_Screens} position={[0, -0.01, 0.05]} />
                </group>
              </group>
              <mesh geometry={nodes.N_Mid_Counter.geometry} material={materials.HD_Wall_NMid} position={[0, -0.29, 0]} />
              <mesh geometry={nodes.N_Mid_Pipe1.geometry} material={materials.HD_Wall_NMid} position={[-1.12, 0, 0.01]} />
              <mesh geometry={nodes.N_Mid_Pipe2.geometry} material={materials.HD_Wall_NMid} position={[1.12, 0, 0.01]} />
              <mesh geometry={nodes.N_Mid_Upper.geometry} material={materials.HD_Wall_NMid} position={[0, 0.35, 0]} />
            </group>
            <group position={[0, 0.71, 0]}>
              <group position={[0.61, 0.01, -0.19]}>
                <mesh geometry={nodes.N_Top_Vent_L_1.geometry} material={materials.HD_Vents} />
                <mesh geometry={nodes.N_Top_Vent_L_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-3.36, -2.04, -4.68]} />
              </group>
              <group position={[-0.61, 0.01, -0.19]}>
                <mesh geometry={nodes.N_Top_Vent_R_1.geometry} material={materials.HD_Vents} />
                <mesh geometry={nodes.N_Top_Vent_R_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-2.14, -2.04, -4.68]} />
              </group>
              <mesh geometry={nodes.N_Top_Wall.geometry} material={materials.HD_Walls} position={[-0.01, 0, 0.01]} />
            </group>
          </group>
          <group position={[0, 0, -2.3]}>
            <group position={[0, -0.71, 0]}>
              <group position={[-0.61, 0.01, 0.18]}>
                <mesh geometry={nodes.S_Bottom_Vent_L_1.geometry} material={materials.HD_Vents} />
                <mesh
                  geometry={nodes.S_Bottom_Vent_L_Ring.geometry}
                  material={materials.HD_WhiteEmissive}
                  position={[-2.14, -0.62, -0.45]}
                />
              </group>
              <group position={[0.61, 0.01, 0.18]}>
                <mesh geometry={nodes.S_Bottom_Vent_R_1.geometry} material={materials.HD_Vents} />
                <mesh
                  geometry={nodes.S_Bottom_Vent_R_Ring.geometry}
                  material={materials.HD_WhiteEmissive}
                  position={[-3.36, -0.62, -0.45]}
                />
              </group>
              <mesh geometry={nodes.S_Bottom_Wall.geometry} material={materials.HD_Walls} />
            </group>
            <group position={[0, 0.71, 0]}>
              <group position={[-0.61, 0.01, 0.18]}>
                <mesh geometry={nodes.S_Top_Vent_L_1.geometry} material={materials.HD_Vents} />
                <mesh geometry={nodes.S_Top_Vent_L_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-2.14, -2.04, -0.45]} />
              </group>
              <group position={[0.61, 0.01, 0.18]}>
                <mesh geometry={nodes.S_Top_Vent_R_1.geometry} material={materials.HD_Vents} />
                <mesh geometry={nodes.S_Top_Vent_R_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-3.36, -2.04, -0.45]} />
              </group>
              <mesh geometry={nodes.S_Top_Wall.geometry} material={materials.HD_Walls} />
            </group>
            <group position={[-0.61, 0.01, 0.18]}>
              <mesh geometry={nodes.S_Mid_Vent_L_1.geometry} material={materials.HD_Vents} />
              <mesh geometry={nodes.S_Mid_Vent_L_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-2.14, -1.33, -0.45]} />
            </group>
            <group position={[0.61, 0.01, 0.18]}>
              <mesh geometry={nodes.S_Mid_Vent_R_1.geometry} material={materials.HD_Vents} />
              <mesh geometry={nodes.S_Mid_Vent_R_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-3.36, -1.33, -0.45]} />
            </group>
            <mesh geometry={nodes.S_Mid_Wall.geometry} material={materials.HD_Walls} />
          </group>
          <group position={[2.48, 0, 0]}>
            <group position={[0, -0.71, 0]}>
              <group position={[-0.19, 0.01, 0.61]}>
                <mesh geometry={nodes.W_Bottom_Vent_L_1.geometry} material={materials.HD_Vents} />
                <mesh
                  geometry={nodes.W_Bottom_Vent_L_RIng.geometry}
                  material={materials.HD_WhiteEmissive}
                  position={[-5.04, -0.62, -3.18]}
                />
              </group>
              <group position={[-0.19, 0.01, -0.61]}>
                <mesh geometry={nodes.W_Bottom_Vent_R_1.geometry} material={materials.HD_Vents} />
                <mesh
                  geometry={nodes.W_Bottom_Vent_R_Ring.geometry}
                  material={materials.HD_WhiteEmissive}
                  position={[-5.04, -0.62, -1.96]}
                />
              </group>
              <mesh geometry={nodes.W_Bottom_Wall.geometry} material={materials.HD_Walls} position={[0.01, 0, 0]} />
            </group>
            <group position={[0, 0.71, 0]}>
              <group position={[-0.19, 0.01, 0.61]}>
                <mesh geometry={nodes.W_Top_Vent_L_1.geometry} material={materials.HD_Vents} />
                <mesh geometry={nodes.W_Top_Vent_L_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-5.04, -2.04, -3.18]} />
              </group>
              <group position={[-0.19, 0.01, -0.61]}>
                <mesh geometry={nodes.W_Top_Vent_R_1.geometry} material={materials.HD_Vents} />
                <mesh geometry={nodes.W_Top_Vent_R_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-5.04, -2.04, -1.96]} />
              </group>
              <mesh geometry={nodes.W_Top_Wall.geometry} material={materials.HD_Walls} position={[0.01, 0, 0]} />
            </group>
            <group position={[-0.19, 0.01, 0.61]}>
              <mesh geometry={nodes.W_Mid_Vent_L_1.geometry} material={materials.HD_Vents} />
              <mesh geometry={nodes.W_Mid_Vent_L_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-0.09, 0, 0]} />
            </group>
            <group position={[-0.19, 0.01, -0.61]}>
              <mesh geometry={nodes.W_Mid_Vent_R_1.geometry} material={materials.HD_Vents} />
              <mesh geometry={nodes.W_Mid_Vent_R_Ring.geometry} material={materials.HD_WhiteEmissive} position={[-5.04, -1.33, -1.96]} />
            </group>
            <mesh geometry={nodes.W_Mid_Wall.geometry} material={materials.HD_Walls} position={[0.01, 0, 0]} />
          </group>
        </group>
      </group>
      <group position={[-1.08, 0.24, 0.94]} rotation={[-Math.PI, 0.79, -Math.PI]}>
        <group position={[0, 0.39, 0]}>
          <mesh geometry={nodes.Base1.geometry} material={materials.A_Base1} />
          <mesh geometry={nodes.BaseLight.geometry} material={materials.Controller_BlueGlow} position={[0, -0.37, 0]} />
          <mesh geometry={nodes.StalkLight.geometry} material={materials.Controller_BlueGlow} position={[0, 0.33, 0]} />
        </group>
        <group position={[0, 0.95, 0]}>
          <group position={[0, 0.01, 0]}>
            <mesh geometry={nodes.Emissive.geometry} material={materials.Controller_BlueGlow} position={[0, -0.96, 0]} />
            <mesh geometry={nodes.Logo.geometry} material={materials.A_Piston} position={[0, -0.96, 0]} />
          </group>
          <group position={[0, 0.13, 0]}>
            <mesh geometry={nodes.ControllerLeft.geometry} material={materials.A_Handle} position={[-0.19, -0.11, 0.23]} />
            <mesh geometry={nodes.ControllerRight.geometry} material={materials.A_Handle} position={[0.21, -0.11, 0.23]} />
            <mesh geometry={nodes.Top.geometry} material={materials.A_Top} position={[0, 0.01, -0.01]} />
          </group>
          <group position={[0, 0.02, 0]}>
            <mesh geometry={nodes.Piston_Upper.geometry} material={materials.A_Piston} position={[0, -0.97, 0]} />
            <mesh geometry={nodes.Yolk_1_1.geometry} material={materials.A_Yolk} position={[0, -0.97, 0]} />
          </group>
          <mesh geometry={nodes.Piston_1_1.geometry} material={materials.A_Piston} position={[0, -0.36, 0]} />
        </group>
      </group>
      <group position={[0.96, 0.24, 0.97]} rotation={[-Math.PI, -0.68, -Math.PI]}>
        <group position={[0, 0.39, 0]}>
          <mesh geometry={nodes.Base1_1.geometry} material={materials.A_Base1} />
          <mesh geometry={nodes.BaseLight_1.geometry} material={materials.Controller_RedGlow} position={[0, -0.37, 0]} />
          <mesh geometry={nodes.StalkLight_1.geometry} material={materials.Controller_RedGlow} position={[0, 0.33, 0]} />
        </group>
        <group position={[0, 0.95, 0]}>
          <group position={[0, 0.01, 0]}>
            <mesh geometry={nodes.Emissive_1.geometry} material={materials.Controller_RedGlow} position={[0, -0.96, 0]} />
            <mesh geometry={nodes.Logo_1.geometry} material={materials.A_Piston} position={[0, -0.96, 0]} />
          </group>
          <group position={[0, 0.13, 0]}>
            <mesh geometry={nodes.ControllerLeft_1.geometry} material={materials.A_Handle} position={[-0.19, -0.11, 0.23]} />
            <mesh geometry={nodes.ControllerRight_1.geometry} material={materials.A_Handle} position={[0.21, -0.11, 0.23]} />
            <mesh geometry={nodes.Top_1.geometry} material={materials.A_Top} position={[0, 0.01, -0.01]} />
          </group>
          <group position={[0, 0.02, 0]}>
            <mesh geometry={nodes.Piston_Upper_1.geometry} material={materials.A_Piston} position={[0, -0.97, 0]} />
            <mesh geometry={nodes.Yolk_1_2.geometry} material={materials.A_Yolk} position={[0, -0.97, 0]} />
          </group>
          <mesh geometry={nodes.Piston_1_2.geometry} material={materials.A_Piston} position={[0, -0.36, 0]} />
        </group>
      </group>
      <group position={[0.95, 0.24, -1.07]} rotation={[0, -0.67, 0]}>
        <group position={[0, 0.39, 0]}>
          <mesh geometry={nodes.Base1_2.geometry} material={materials.A_Base1} />
          <mesh geometry={nodes.BaseLight_2.geometry} material={materials.Controller_GreenGlow} position={[0, -0.37, 0]} />
          <mesh geometry={nodes.StalkLight_2.geometry} material={materials.Controller_GreenGlow} position={[0, 0.33, 0]} />
        </group>
        <group position={[0, 0.95, 0]}>
          <group position={[0, 0.01, 0]}>
            <mesh geometry={nodes.Emissive_2.geometry} material={materials.Controller_GreenGlow} position={[0, -0.96, 0]} />
            <mesh geometry={nodes.Logo_2.geometry} material={materials.A_Piston} position={[0, -0.96, 0]} />
          </group>
          <group position={[0, 0.13, 0]}>
            <mesh geometry={nodes.ControllerLeft_2.geometry} material={materials.A_Handle} position={[-0.19, -0.11, 0.23]} />
            <mesh geometry={nodes.ControllerRight_2.geometry} material={materials.A_Handle} position={[0.21, -0.11, 0.23]} />
            <mesh geometry={nodes.Top_2.geometry} material={materials.A_Top} position={[0, 0.01, -0.01]} />
          </group>
          <group position={[0, 0.02, 0]}>
            <mesh geometry={nodes.Piston_Upper_2.geometry} material={materials.A_Piston} position={[0, -0.97, 0]} />
            <mesh geometry={nodes.Yolk_1_3.geometry} material={materials.A_Yolk} position={[0, -0.97, 0]} />
          </group>
          <mesh geometry={nodes.Piston_1_3.geometry} material={materials.A_Piston} position={[0, -0.36, 0]} />
        </group>
      </group>
      <group position={[-1.08, 0.24, -1.08]} rotation={[0, 0.99, 0]}>
        <group position={[0, 0.39, 0]}>
          <mesh geometry={nodes.Base1_3.geometry} material={materials.A_Base1} />
          <mesh geometry={nodes.BaseLight_3.geometry} material={materials.Controller_PurpleGlow} position={[0, -0.37, 0]} />
          <mesh geometry={nodes.StalkLight_3.geometry} material={materials.Controller_PurpleGlow} position={[0, 0.33, 0]} />
        </group>
        <group position={[0, 0.95, 0]}>
          <group position={[0, 0.01, 0]}>
            <mesh geometry={nodes.Emissive_3.geometry} material={materials.Controller_PurpleGlow} position={[0, -0.96, 0]} />
            <mesh geometry={nodes.Logo_3.geometry} material={materials.A_Piston} position={[0, -0.96, 0]} />
          </group>
          <group position={[0, 0.13, 0]}>
            <mesh geometry={nodes.ControllerLeft_3.geometry} material={materials.A_Handle} position={[-0.19, -0.11, 0.23]} />
            <mesh geometry={nodes.ControllerRight_3.geometry} material={materials.A_Handle} position={[0.21, -0.11, 0.23]} />
            <mesh geometry={nodes.Top_3.geometry} material={materials.A_Top} position={[0, 0.01, -0.01]} />
          </group>
          <group position={[0, 0.02, 0]}>
            <mesh geometry={nodes.Piston_Upper_3.geometry} material={materials.A_Piston} position={[0, -0.97, 0]} />
            <mesh geometry={nodes.Yolk_1_4.geometry} material={materials.A_Yolk} position={[0, -0.97, 0]} />
          </group>
          <mesh geometry={nodes.Piston_1_4.geometry} material={materials.A_Piston} position={[0, -0.36, 0]} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/hyperdeck.glb");
