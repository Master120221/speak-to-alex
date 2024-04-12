/****************************************************************
 * Copyright (c) 2023-2024 Dmytro Ostapenko. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************/

import React from 'react';

function Tile({clickAction, icon, title, subtitle, description, checkable, checked, setChecked}) {
    const [checkedState, setCheckedState] = React.useState(checked);

    return (
        <div onClick={() => {
            if (checkable) {
                setCheckedState(!checkedState);
                setChecked(!checkedState);
            }

            if (clickAction !== undefined) clickAction();
        }} className={checkedState ? "tile-bg-active" : "tile-bg"}>
            <div className={"tile-icon-frame"}>
                <span className={"tile-icon material-symbols-outlined"}>{icon}</span>
            </div>
            <div className={"tile-content-frame"}>
                <p className={"tile-title"}> {title}</p>
                <p className={"tile-subtitle"}>{subtitle}</p>
            </div>
        </div>
    );
}

export default Tile;